import { createClient } from "@supabase/supabase-js"

const key= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsaW9qcmlkbnV3a3RjbGF5bXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1ODc1NjAsImV4cCI6MjEwMjE2MzU2MH0.ETBnkDoxtwrZouW2dTPMHgchSkeK2htky8YW6_ExYtk"
const url= "https://fliojridnuwktclaymrr.supabase.co"
const supabase = createClient(url, key)

export default function uploadMedia(file){
    return new Promise(
        (resolve, reject)=>{
            if(file==null){
                reject("no file selected")
            }else{

                const timestamp = new Date.now().getTime();

                const fileName = timestamp + file.name;

                supabase.storage
                    .from
                    .upload(fileName, file)
                    .then(
                        ()=>{
                            const publicUrl = supabase.storage
                                .from("images")
                                .getPublicUrl(fileName).data.publicUrl;
                        }
                    ).catch(
                        (err)=>{
                            reject(err);
                        }
                    )
            }
        }
    )
}