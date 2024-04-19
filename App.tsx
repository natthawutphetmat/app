
import {StyleSheet, View, Text, ScrollView, ImageBackground} from 'react-native';
import { TouchableOpacity, Linking} from 'react-native';
import {
  Header
} from 'react-native/Libraries/NewAppScreen';
const Layer = () => {
  const handlePress = () => {
    Linking.openURL('https://www.service-ads.com/');
  };
  const handlePressAbout = () => {
    // เปิดลิงค์ไปยังหน้า About
    Linking.openURL('about://');
  };
  return (
    <ScrollView>
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
  <Text style={{ fontFamily: 'SukhumvitSet-Bold', textAlign: 'center', fontWeight: 'bold' }}>
  รับทำโฆษณา Facebook Ads
</Text>

    
      <View style={{ flex: 2, height:200 }}>
  <ImageBackground source={require('./img/fb.jpg')} style={{ flex: 1 }}>
    {/* พื้นที่สำหรับเนื้อหาอื่น ๆ ที่คุณต้องการเพิ่ม */}
  </ImageBackground>
</View>


<View style={{ alignItems: 'center', marginTop: 20 }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#007bff',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 5,
        }}
        onPress={handlePress}
      >
        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 16 }}>
          ติดต่อเรา
        </Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 10, textAlign: 'center', lineHeight: 20 }}>
        รับทำโฆษณา Facebook Ads สายเทา
        {'\n'}
        ค่าบริการเหมาจ่ารายเดือนเพียงเดือนละ 9,900 บาท ไม่มีค่าใช้ค่าใดใดเพิ่มเติมทั้งสิน
        {'\n'}
        เราจะรันโฆษณาให้ตลอดเวลา 24 ชั่วโมงตามที่ลูกค้ากำหนด เป็นระยะเวลา 30 วันเต็ม
        {'\n'}
        บัญชีโฆษณาทั้งหมดจะถูกจัดการโดยเราเอง ไม่จำกัดจำนวน
        {'\n'}
        เราจะจัดการเว็บไซต์เซลเพจหน้าขาวให้ทั้งหมดรวมถึงโดเมน โดยไม่คิดค่าใช้จ่ายเพิ่มเติม
        {'\n'}
        รูปภาพต่าง ๆ (รูปโปรหากมี) ควรจัดหามาเอง อย่างน้อย 5 รูป รูปแบบ png, jpg, gif
        {'\n'}
        เราจะส่งรายงานผลให้ทุกวันเวลา 10.00 น. ของทุกวัน
        {'\n'}
        ลูกค้าสามารถเข้าไปตรวจสอบบัญชีด้วยตนเองผ่าน VPS เท่านั้น ในส่วนนี้ลูกค้าต้องรับผิดชอบค่าบริการเอง
        {'\n'}
        สำหรับการชำระค่าโฆษณา ลูกค้าสามารถใช้บัตรเครดิตของตนเองกับ Facebook Ads ได้เลย หรือสามารถใช้บัตรที่เราจัดเตรียมไว้ให้ก็ได้ โดยไม่มีค่าใช้จ่ายเพิ่มเติม (แนะนำ)
        {'\n'}
        ขอบคุณลูกค้าทุกท่านที่ใช้บริการทีมงานของเราครับ!
      </Text>
    </View>

  








      <View style={{flex: 2}} />
      <View style={{flex: 3}} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});

export default Layer;