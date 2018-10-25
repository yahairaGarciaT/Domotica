const int LUZSALA= 13;
const int LUZDECOCINA= 12;
void setup()
{
pinMode(LUZSALA,OUTPUT);
pinMode(LUZDECOCINA,OUTPUT);
}
void loop()
{
digitalWrite(LUZSALA,HIGH);
delay(1000);
digitalWrite(LUZSALA,LOW);
digitalWrite(LUZDECOCINA,HIGH);
delay(1000);
digitalWrite(LUZDECOCINA,LOW);
}
