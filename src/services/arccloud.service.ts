import axios from "axios";

const METADATA_API_URL = "https://eu-api-v2.acrcloud.com/api/external-metadata/tracks";
const API_TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiMDZmZWNkYzkzMWJjMDBlN2FmNWMzNTMxYWExMTc5Y2RjODRhYjcwZmRmMTQzM2RkNThlODAyZWJkMWRkZTk2NjJmZDFhY2VmYWMwYzBlOTQiLCJpYXQiOjE2OTc3MDI2ODEuOTQ3ODk5LCJuYmYiOjE2OTc3MDI2ODEuOTQ3OTAyLCJleHAiOjIwMTMzMjE4ODEuODk1NTY1LCJzdWIiOiIxNjM5NjIiLCJzY29wZXMiOlsibWV0YWRhdGEiLCJyZWFkLW1ldGFkYXRhIl19.CmQUkP94c0LcwB_7rKemP4QXisOQyRfOma2KB08A2CE9sEMmBpTeoBJ8iKTw3DA2NfyJ-EJWktr_Ve2lOsMEjDeFFt5v-VHbCU46fOFrYhMGAH4Y7Of9NP4zRQ5hmu2bCW2gk9_C1wrI9ZfL4t2nMKdhOooNEsfEDyooZL7YfeGELbrCstM5Fpt7XIpmgfLqgRCWLhGBdiVl665DdK95rnChCVH--C01YlYkSrfX00z5PUczsdWYtpnWGstuNHp-qrLemmqtbDlTJ4eKUnaUX7UCeT-c0ulgdDxP3hrCeYT0-Xb8KWoIDHDVeYN4_flVCwznyuMqLM0EMFZoQeK2kCst-Z4QUbNjJ5anH1yjhRGezdc5rPzIlUGgtVQx1RBBaW4pZqJ929biPuXHORLBet1t7IoA6mSj1kMoG-L-AX0Vu3BWR1IJGN4wrIIAgSdgBRGXXt_ON1s2v1kAsH9cbLOLLBS2AM6fOTRBrbkBTouwRg8Qk4NRYgj9LQ4VK_OX0_ziTTrfXTOOMYztX_l__Kx8HoxhK0OuqWmnC8liTSD1hZW-Ebp-UHGRL80j2EJYC2nbipCqyAFewO25q9TJF0XOBAr7WhVaU-1er8k1whci_BodZol4RgzbWksh4j3IOSN1I61y6MMBWL5h0Nay1aEnL984yQzz4G_IFdoI8ss";
const headers = { Authorization: `Bearer ${API_TOKEN}` };

export type ArcCloudTrack = {
    name: string;
    duration_ms: number;
    track_number: number;
    isrc: string;
    artists: { name: string }[];
    album: {
        name: string;
        release_date: string;
        cover: string;
        covers: {};
        upc: string;
    };
    label: string;
    external_metadata: {};
    type: string;
};

export class ArcCloudService {
    async findOne(name: string, artistName: string): Promise<ArcCloudTrack> {
        const params = {
            query: `{"track": "${name}", "artists": ["${artistName}"]}`,
            format: "json",
        };

        const { data } = await axios.get(METADATA_API_URL, { headers, params });
        if (data.error) console.log({ error: data.message });

        return data.data[0];
    }
}
