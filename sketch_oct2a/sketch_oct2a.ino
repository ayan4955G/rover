#include <WiFi.h>
#include <Wire.h>
#include <MPU6050.h>
#include <ArduinoWebsockets.h>

using namespace websockets;

const char* ssid = "Ayan_Shaikh";
const char* password = "ayan_2007_@";

// CHANGE THIS to your PC's IP
const char* websocket_server = "ws://192.168.0.165:3000";

MPU6050 mpu;
WebsocketsClient client;

unsigned long lastSend = 0;

void setup() {
  Serial.begin(115200);

  // ================= WIFI =================
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi Connected");
  Serial.println(WiFi.localIP());

  // ================= MPU6050 =================
  Wire.begin(21, 22);
  mpu.initialize();

  // if (!mpu.testConnection()) {
  //   Serial.println("MPU6050 connection failed");
  //   while (1);
  // }
  Serial.println("MPU6050 ready");

  // ================= WEBSOCKET =================
  client.onMessage([](WebsocketsMessage message) {
    Serial.print("Server says: ");
    Serial.println(message.data());
  });

  client.onEvent([](WebsocketsEvent event, String data) {
    if (event == WebsocketsEvent::ConnectionOpened) {
      Serial.println("WebSocket Connected");
    }
    if (event == WebsocketsEvent::ConnectionClosed) {
      Serial.println("WebSocket Disconnected");
    }
  });

  client.connect(websocket_server);
}

void loop() {
  client.poll();

  // send data every 50 ms (~20Hz)
  if (millis() - lastSend > 50) {
    lastSend = millis();

    int16_t gx, gy, gz;
    mpu.getRotation(&gx, &gy, &gz);

    // scale to deg/sec
    float gx_d = gx / 131.0;
    float gy_d = gy / 131.0;
    float gz_d = gz / 131.0;

    // JSON payload
    String json = "{";
    json += "\"deviceId\":\"esp32_01\",";
    json += "\"gx\":" + String(gx_d, 2) + ",";
    json += "\"gy\":" + String(gy_d, 2) + ",";
    json += "\"gz\":" + String(gz_d, 2);
    json += "}";

    client.send(json);

    // optional debug
    Serial.println(json);
  }
}
