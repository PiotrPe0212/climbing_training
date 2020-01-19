import React from 'react'
import './ResultText.css';
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFDownloadLink
} from '@react-pdf/renderer';
import questionArray from '../ResultData/ResultData'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

function MyDoc() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Odpowiedzi</Text>
                    {questionArray.map((answer, index) => <Text key={index}>{answer.userAnswer}</Text>)}
                </View>
                <View style={styles.section}>
                    <Text>Plan</Text>
                    <Text>in progress</Text>
                </View>
            </Page>
        </Document>
    )
}

function ResultText() {

    return (
        <div>
            <PDFDownloadLink document={< MyDoc />} fileName="somename.pdf">
                {({blob, url, loading, error}) => (loading
                    ? 'Loading document...'
                    : 'Pobierz')}
            </PDFDownloadLink>

        </div>
    )
}

export default ResultText