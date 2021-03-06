import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, ProfileItem, Button, Gap } from '../../components'
import { colors } from '../../utils/colors'
import { DummyDoctor1 } from '../../assets'

const DoctorProfile = ({navigation, route}) => {
    const dataDoctor = route.params;
    return (
        <View style={styles.page} >
            <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
            <Profile photo={{uri:dataDoctor.data.photo}} name={dataDoctor.data.fullName} desc={dataDoctor.data.profession} />
            <Gap height={10} />
            <ProfileItem label="Alumnus" value={dataDoctor.data.university} />
            <ProfileItem label="Tempat Praktik" value={dataDoctor.data.hospital_address} />
            <ProfileItem label="No. STR" value={dataDoctor.data.str_number} />
            <View style={styles.action}>
                <Button title="Start Consultant" onPress={() => navigation.navigate('Chatting', dataDoctor)}/>
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    action: {
        paddingHorizontal:40,
        paddingTop: 23
    }
})
