exports.limitLu = (m) =>{
	return`Sisa limit kamu : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`List ${a} dengan key ${b} sudah ada di database`
	}
exports.delstik = (a, b) =>{
	return`List ${a} dengan key ${b} tidak ada di database`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`š Nama: ${username} (@${m.sender.split`@`[0]})${about ? '\nš Bio: ' + about : ''}
šØāā¤ļøāšØ Status: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#ļøā£ Nomor: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
š Link: https://wa.me/${m.sender.split`@`[0]}
š¤·āāļø XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
šļø Level: ${level}
š¢ Role: ${role}
š Limit: ${limit}
Ā®ļø Registered: ${registered ? 'ā (' + tanggal(regTime) + ')' : 'ā'}
ā½ Premium: ${premium ? `ā\nā° Expired Premium : msToDate(premiumDate - now)` : 'ā'}
š Last claim: ${lastclaim > 0 ? + tanggal(lastclaim) : '-'}`
	}

//
exports.needReg = (a, b, c) =>{
	return`š²šØ Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game

šŗš² Please register first

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Limit kamu hari ini telah habis ā ļø\n\nSilahkan beli limit dengan cara ketik ${prefix}buy atau ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`Nomor seri (sn) nya salah`
	}
exports.NoseriOk = () =>{
	return`Berhasil membatalkan pendaftaran!`
	}
exports.ExReg = (c) =>{
	return`š²šØ Gunakan tanda "|" sebagai pembatas

Gini : #daftar nama|umur|gender|hobi

Contoh : #daftar ${a}|18|cowo|Game



šŗš² Use the "|" sign as a barrier


Like this : #register name|age|gender|hobby

Example : #register ${a}|18|male|Games`
	}
exports.DoneReg = () =>{
	return`Kamu sudah terdaftar di database`
	}
exports.UmurReg = () =>{
	return`Umur harus berupa angka`
	}
exports.NamaReg = () =>{
	return`Nama kamu panjang banget, gunakan nama awal saja`
	}
exports.HobiReg = () =>{
	return`Hobi kamu banyak banget, cukup 1 atau 2 hobi saja`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`ā­āć *VERIFIKASI BERHASIL* ć
ā\`\`\`Verifikasi Sukses Dengan\`\`\` 
ā
ā\`\`\`SN: ${a}\`\`\`
ā\`\`\`Pada : ${b}\`\`\`
ā\`\`\`Nama : ${c}\`\`\`
ā\`\`\`Umur : ${d}\`\`\`
ā\`\`\`Gender : ${e}\`\`\`
ā\`\`\`Nomor : @${f}\`\`\`
ā\`\`\`Untuk menggunakan bot silahkan \`\`\`
ā\`\`\`Kirim perintah ${g}menu\`\`\`
ā\`\`\`atau ${h}allmenu\`\`\`
ā
ā\`\`\`\Total : ${i} Users\`\`\`
ā°āāāāāāāāāāāāāāāāāāāāā`
	}
exports.genderReg = (a) =>{
	return`Pilih salah satu ( cewe / cowo)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`Umur kamu terlalu tua, bukannya mati ehh malah main bot`
	}
exports.firstChat = (a, b, c) =>{
	return`Selamat ${a} ${b} š¤, saya adalah ${c} yaitu bot whatsapp. Ada yang bisa ${c} bantu?`
	}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Sukses Menambahkan ${q} Ke Dalam Database ${a}\n\nCek dengan cara ${prefix}${b}`
	}
	
exports.AddstikOk_ = (a,b) =>{
	return`Durasi ${a} detik, yaitu durasi maksimal ${b} yang bisa bot simpan ke dalam database`
	}
exports.Addvn = () =>{
	return`Tunggu sebentar, saya akan mencoba untuk mengupload media ini ke database`
	}
	
exports.ListStik = (a) =>{
	return`_Untuk mengambil ${a} silahkan kirim pesan sesuai dengan list ${a} yang ada di atas_`
	}
exports.noAbsen = () =>{
return `ā Tidak ada absen berlangsung di group ini !`
}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.DahAbsen = () =>{
	return`Kamu sudah absen`
	}
exports.DelAbsen = () =>{
	return`ā Berhasil menghapus absen di group ini`
	}
exports.adaAbsen = () =>{
	return`Masih ada sesi absen di group ini !`
	}
exports.SAbsen = () =>{
	return`Absen dimulai`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply stiker!!\nExample : ${prefix + command} menu\n\n\n*Note : Tidak dapat disertai Prefix!!*`
	}
exports.CmdApa = () =>{
	return`Untuk Command Apa?`
	}
exports.UCmd = () =>{
	return`Anda tidak memiliki izin untuk mengubah perintah stiker ini`
	}
exports.HashCmd = () =>{
	return`Tidak ada hash`
	}
exports.DelCmd = () =>{
	return`ā Sticker cmd telah di hapus`
	}
exports.LockCmd = () =>{
	return`Reply pesan`
	}
exports.NoCmd = () =>{
	return`Hash tidak ditemukan di database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message Yang Ingin Disave Di Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Contoh : ${prefix + command} nama file`
	}
exports.AdMsg = (text) => {
    return `'${text}' telah terdaftar di list pesan`
}
exports.DoneMsg = (prefix, text) => {
    return `Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' tidak terdaftar di list pesan`
}
exports.DelMsg = (text) => {
    return `Berhasil menghapus '${text}' dari list pesan`
}

exports.OnBef = () => {
    return `Sudah di aktifkan sebelumnya`
}
exports.OffYaBef = () => {
    return `Sudah di nonaktifkan sebelumnya`
}
exports.OkOn = (command) => {
    return `${command} Berhasil Di Aktifkan !`
}
exports.OffBef = (command) => {
    return `${command} Berhasil Di Nonaktifkan !`
}
exports.OkMute = () => {
    return `Bot Telah Di Mute Di Group Ini`
}
exports.OkUnMute = () => {
    return `Bot Berhasil Di UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Berhasil Di unban chat`
}
exports.NoMute = () => {
    return `Bot belum di ban dalam group ini`
}

exports.NoMsgBot = () => {
    return `Pesan tersebut bukan dikirim oleh bot!`
}
exports.ToimgErr = () => {
    return `Maaf Saat Ini Belum Support Sticker Gif`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker Dengan Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Sukses Ganti Ke Mode Public`
}
exports.BotSelf = () => {
    return `Sukses Ganti Ke Mode Self\n\nUntuk mengubah ke mode public silahkan gunakan nomor bot`
}
exports.NoToStik = (prefix, command) => {
    return `Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`
}
exports.NoPpBot = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `Pesan Yang anda reply tidak mengandung reply`
}
exports.SetGcName = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*`
}
exports.SetPpGc = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Masukkan Link Group!`
}
exports.MauKick = () => {
    return `Kirim nomer/tag/reply target yang ingin di kick !`
}
exports.MauAdd = () => {
    return `Kirim nomer/tag/reply target yang ingin di add !`
}
exports.NakPm= () => {
    return `Kirim nomer/tag/reply target yang ingin di promote !`
}
exports.NakDm = () => {
    return `Kirim nomer/tag/reply target yang ingin di demote !`
}
exports.Family = () => {
    return `Masih Ada Sesi Yang Belum Diselesaikan!`
}
exports.NoWm = (prefix, command) => {
    return `Kirim perintah ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Berhasil Diubah Menjadi\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*\n\nContoh : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks 1|teks 2*\n\nContoh : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `Fitur nsfw belum di aktifkan`
}
exports.CoverBanLol = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*Color Yg Kamu Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Contoh: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Contoh: ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} Yg Kamu Masukkan Salah*\n\n_Berikut List ${style2} Yg Benar, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style) => {
    return `Contoh penggunaan : \n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Contoh : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Contoh penggunaan : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `ā Jawaban Salah`
}

exports.JwbTrue = (tebak) => {
return`š® ${tebak} š®\n\nJawaban Benar š\n\nIngin bermain lagi? tekan button dibawah`
}
exports.TbGam = () => {
    return `Tebak Gambar`
}
exports.TbKa = () => {
    return `Tebak Kata`
}
exports.TbBe = () => {
    return `Tebak Bendera`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Susun Kata`
}
exports.TbAt = () => {
    return `Tebak Kalimat`
}
exports.TbSi = () => {
    return `Tebak Siapa`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Tebak Kabupaten`
}
exports.TbKi = () => {
    return `Tebak Kimia`
}
exports.TbLi = () => {
    return `Tebak Lirik`
}
exports.TbKan = () => {
    return `Tebak Tebakan`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Jawablah Pertanyaan Berikut :*\n${soal}\n\nTerdapat *${jawaban}* Jawaban ${find(v => v.includes(' ')) ? '(Beberapa Jawaban Terdapat Spasi)' : ''}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Telah Afk Dengan Alasan ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time) => {
    return `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${desk}\nWaktu : ${time}`
}
exports.TbGambar_ = (jawaban) => {
    return `Waktu Habis\nJawaban:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Waktu Habis\nJawaban:  ${jawaban}}\nDeskripsi : ${desk}`
}
exports.TbKata = (soal, time) => {
    return `Silahkan Jawab Pertanyaan Berikut\n\n${soal}\nWaktu : ${time}`
}
exports.TbBendera = (time) => {
    return `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : ${time}`
}
exports.TbKabupaten = (time) => {
    return `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : ${time}`
}
exports.TbKimia = (soal, time) => {
    return `Apa Arti Dari Simbol : *${soal}*?\nWaktu : ${time}`
}
exports.TbLirik = (soal, time) => {
    return `Ini Adalah Lirik Dari Lagu? : *${soal}*?\nWaktu : ${time}`
}
exports.TbSusun = (soal, tipe, time) => {
    return `*Jawablah Pertanyaan Berikut :*\nSoal : ${soal}\nTipe : ${tipe}\nWaktu : ${time}`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nContoh penggunaan: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*Berapa hasil dari: ${soal}*?\n\nWaktu: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Kirim/Reply Foto/Sticker Dengan Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Masukkan username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply stiker gif dengan caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Kirim/Reply Media Dengan Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Mengirim Broadcast Ke ${anu} ${chat}\nWaktu Selesai ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker dengan caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Kirim/reply ${video} dengan caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	ā¢ Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	ā¢ Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key tidak boleh sama dengan fitur / command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key|response*\n\n_Contoh_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List respon dengan key : *${arg}* sudah ada di group ini.`
}
exports.AddlistDone = (arg) => {
    return `Sukses set list message dengan key : *${arg}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Dellist = () => {
    return `Belum ada list message di database`
}
exports.Dellist_  = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List respon dengan key *${key}* tidak ada di database!`
}
exports.DellistDone = (key) => {
    return `Sukses delete list message dengan key *${key}*`
}
exports.ListUp = (key) => {
    return `Maaf, untuk key *${key}* belum terdaftar di group ini`
}
exports.UpList = (key) => {
    return `Sukses update list message dengan key : *${key}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hai ${pushname} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}start untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
}
exports.Anon = () => {
    return `Cari Teman Chat`
}
exports.StopAnon = () => {
    return `Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner `
}
exports.AnonNew = () => {
    return `Cari Teman Baru`
}
exports.AnonDahStop = () => {
    return `ā Berhasil memberhentikan chat`
}
exports.StopAnonByFren = () => {
    return `ā ļø Sesi chat ini telah diberhentikan oleh teman chat kamu`
}
exports.AnonOn = () => {
    return `ā ļø Kamu masih dalam sesi chat dengan partner!`
}
exports.AnonFind = (prefix) => {
    return `_Pasangan Ditemukan š¼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonSearch = () => {
    return `š Mohon tunggu sedang mencari teman chat`
}
exports.NoAnon = () => {
    return `ā ļø Kamu belum pernah memulai chat!`
}
exports.NoAudRep = (prefix, command) => {
    return `Balas audio yang ingin diubah dengan caption *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `Contoh penggunaan :\n${prefix + command} 62938828728992 \natau\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `ā ļø Mohon maaf nomor kamu telah di banned oleh owner\n\nOwner š\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} dengan caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}
exports.AllFitur = () => {
    return `\n_Semua fitur bot_`
}
exports.InfoMenu = () => {
    return `\n_Mencari informasi terkini melalui bot_`
}
exports.KhususOwn = () => {
    return `\n_Fitur khusus owner bot_`
}
exports.DataBor = () => {
    return `\n_Menyimpan sesuatu di database bot_`
}
exports.MenuGc = () => {
    return `\n_Menampilkan fitur khusus group_`
}
exports.MenuAni = () => {
    return `\n_Mencari random gambar anime_`
}
exports.TagMem = () => {
    return `\n_Menandai member group_`
}
exports.StalkOrk = () => {
    return `\n_Kepoin sosmed orang_`
}
exports.Hoja = () => {
    return `\n_Mencari sesuatu yang gk penting_`
}
exports.CovertWi = () => {
    return `\n_Mengkorversi sesuatu dengan bot_`
}
exports.AnuFoto = () => {
    return `\n_Mengubah gambar jadi lebih menarik_`
}
exports.HajuStik = () => {
    return `\n_Membuat stiker yang unik_`
}
exports.EloDown= () => {
    return `\n_Menampilkan fitur download_`
}
exports.StikerWibu = () => {
    return `\n_Random stiker anime_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_Untuk membuat logo menggunakan bot_`
}
exports.oterMenu = () => {
    return `\n_Menu lainnya_`
}
exports.GameBot = () => {
    return `\n_Fitur untuk bermain dengan bot_`
}
exports.RandRik = () => {
    return `\n_Random video tiktok_`
}
exports.RandCew = () => {
    return `\n_Random gambar cewe cantik_`
}
exports.RamalOi = () => {
    return `\n_Ramalan masa kini_`
}
exports.TeleStik= () => {
    return `\n_Random stiker dari telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Membuat logo keren dengan bot_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Membuat logo menarik_`
}
exports.TobatBro = () => {
    return `\n_Fitur islami_`
}
exports.MauJualan = () => {
    return `\n_Fitur untuk berjualan_`
}
exports.Maustorage = () => {
    return `\n_Fitur untuk menyimpan stiker, audio, foto dan video_`
}
exports.MauChanger = () => {
    return `\n_Fitur untuk mengubah suara audio / vn_`
}
exports.GadaChat = () => {
    return `\n_Fitur untuk melakukan chat random_`
}
exports.SumberBot = () => {
    return `\n_Sumber script bot ini_`
}
exports.Tqnya = () => {
    return `\n_Siapa aja yang berkontribusi di dalam bot ini_`
}
exports.SetAh = () => {
    return `Mau set menu ya ?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${gc}`
    }
    exports.GjdKick = () => {
    return `Sepertinya kamu mengirimkan link group ini, kamu tidak akan di keluarkan`
    }
/////////

/////////
exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `*WAIT*\n_Mohon Tunggu Sebentar . . ._`
}
exports.ok = () => {
    return `*OKE*\n_Nih Hasilnya š_`
}

exports.err = () => {
    return `ā ļø Fitur Sedang Error`
}
exports.erorLink = () => {
    return `ā ļø Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ā Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `ā Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `ā Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `ā Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `ā  ļøSudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `š„  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `š  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*āā ć HALL OF SHAME ć āā*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `ā User bukan seorang admin! ā`
}

exports.adminAlready = () => {
    return `ā Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! š`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} š selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
āļø Waktu (WIB) : ${time}*

āāāć Bot Info ć 
āā¾ .owner
āā¾ .rules
āā¾ .sc
āā¾ .ping
āā¾ .runtime
āā¾ .botstatus
āź„ .donate


āāāć Owner ć 
āā¾ .setmenu [query]
āā¾ .setmenu templateLocation
āā¾ .setmenu templateTenor
āā¾ .setmenu katalog
āā¾ .setmenu katalog2
āā¾ .setmenu list
āā¾ .setwm packname|author
āā¾ .sendsesi
āā¾ .listpc
āā¾ .listgc
āā¾ .broadcast [text]
āā¾ .bc [text]
āā¾ .bcgc 
āā¾ .bcimage
āā¾ .bcaudio
āā¾ .bcstiker
āā¾ .bcvn
āā¾ .bcvideo
āā¾ .banuser
āā¾ .unban
āā¾ .banned
āā¾ .listbanned
āā¾ .block
āā¾ .ublock
āā¾ .listblock
āā¾ .addpremium
āā¾ .delpremium
āā¾ .listpremium
āā¾ .nsfw [on/off]
āā¾ .mute [on/off]
āā¾ .autoblok212 [on/off]
āā¾ .banchat
āā¾ .unbanchat
āā¾ .autorespond [on/off]
āā¾ .antiviewonce [on/off]
āā¾ .autobio [on/off]
āā¾ .join [link]
āā¾ .self
āā¾ .public [only bot]
āā¾ .del [reply pesan bot]
āā¾ .pppanjang
āā¾ .setpppanjang
āź„ .setppbot [reply image]

āāāć Store Menu ć
āā¾ .list
āā¾ .addlist [key|respond]
āā¾ .dellist [key]
āā¾ .update [key|respond]
āā¾ .store
āā¾ .kali
āā¾ .bagi
āā¾ .tambah
āā¾ .kurang
āā¾ .kalkulator
āā¾ .setproses
āā¾ .updateproses
āā¾ .cekproses
āā¾ .delproses
āā¾ .setdone
āā¾ .updatedone
āā¾ .cekdone
āā¾ .deldone
āā¾ .pay
āā¾ .setcaptionpay
āā¾ .setpaysewa
āā¾ .proses
āź„ .done

āāāć Anonymous ć
āā¾ .anonymous 
āā¾ .start
āā¾ .skip [daerah]
āź„ .stop [surah|ayat]


āāāć Database ć 
āā¾ .setcmd [reply stiker]
āā¾ .delcmd [reply stiker]
āā¾ .listcmd
āā¾ .absen
āā¾ .cekabsen
āā¾ .deleteabsen
āā¾ .absenstart
āā¾ .addmsg [nama file]
āā¾ .getmsg [nama file]
āā¾ .listmsg
āź„ .delmsg [nama file]

āāāć Rpg Games ć
āā¾ .adventure
āā¾ .weekly
āā¾ .use
āā¾ .transfer
āā¾ .slot
āā¾ .shop
āā¾ .pasar
āā¾ .profile
āā¾ .ojek
āā¾ .open
āā¾ .nguli
āā¾ .narik
āā¾ .nabung
āā¾ .monthly
āā¾ .mining
āā¾ .merampok
āā¾ .mancing
āā¾ .kolam
āā¾ .koboy
āā¾ .kerja
āā¾ .kandang
āā¾ .judi
āā¾ .inventory
āā¾ .hourly
āā¾ .fishop
āā¾ .feed
āā¾ .duel
āā¾ .daily
āā¾ .craft
āā¾ .cooldown
āā¾ .cook
āā¾ .collect
āā¾ .chop
āā¾ .casino
āā¾ .buy
āā¾ .bank 
āā¾ .bansos
āā¾ .berdagang
āā¾ .berkebon
āź„ .build

āāāć Group ć 
āā¾ .addsewa
āā¾ .delsewa
āā¾ .register
āā¾ .unregister
āā¾ .ceksn
āā¾ .listonline
āā¾ .sider
āā¾ .wm packname|author
āā¾ .infochat
āā¾ .setdesk [text]
āā¾ .setppgrup [reply image]
āā¾ .pppanjanggc
āā¾ .setpppanjanggc
āā¾ .revoke
āā¾ .leave
āā¾ .add [62***]
āā¾ .kick @tag
āā¾ .leave
āā¾ .linkgc
āā¾ .welcome [on/off]
āā¾ .goodbye [on/off]
āā¾ .demotedetect [on/off]
āā¾ .promotedetect  [on/off]
āā¾ .setwelcome
āā¾ .updatewelcome
āā¾ .delwelcome
āā¾ .cekwelcome
āā¾ .setgoodbye
āā¾ .updategoodbye
āā¾ .delgoodbye
āā¾ .cekgoodbye
āā¾ .setpromote
āā¾ .updatepromote
āā¾ .setdemote
āā¾ .updatedemote
āā¾ .cekpromote
āā¾ .cekdemote
āā¾ .delpromote
āā¾ .deldemote
āā¾ .nsfw [on/off]
āā¾ .antilink [on/off]
āā¾ .take packname|author
āā¾ .group [open/close]
āā¾ .tagall [text]
āź„ .hidetag [text]

āāāć Anime ć 
āā¾ .quotesanime
āā¾ .anime [query]
āā¾ .animeinfo
āā¾ .manga [query]
āź„ .character [query]

āāāć Tag ć 
āā¾ .stickertag
āā¾ .videotag [query]
āā¾ .vntag [query]
āź„ .imagetag [query]

āāāć Stalking ć 
āā¾ .igstalk [username]
āā¾ .ghstalk [username]
āź„ .ytstalk [channel]


āāāć Search ć 
āā¾ .ytsearch [query]
āā¾ .wallpaper [query]
āā¾ .google [query]
āā¾ .wikimedia [query]
āā¾ .apksearch
āā¾ .findapk
āā¾ .hentai
āā¾ .wattpad [query]
āā¾ .webtoons [query]
āā¾ .drakor [query]
āź„ .pinterest [query]


āāāć Converter ć
āā¾ .emoji [š­]
āā¾ .emojimix [š­+š©]
āā¾ .toaudio [video]
āā¾ .tomp3 [video]
āā¾ .tovn [video]
āā¾ .stiker [reply image]
āā¾ .tourl [image/video/stiker]
āā¾ .togif [sticker]
āā¾ .tomp4 [sticker]
āź„${prefix}toimg [reply sticker]


āāāć Image Effect ć 
āā¾ .wanted [reply image/stiker]
āā¾ .utatoo [reply image/stiker]
āā¾ .unsharpen [reply image/stiker]
āā¾ .thanos [reply image/stiker]
āā¾ .sniper [reply image/stiker]
āā¾ .sharpen [reply image/stiker]
āā¾ .sepia [reply image/stiker]
āā¾ .scary [reply image/stiker]
āā¾ .rip [reply image/stiker]
āā¾ .redple [reply image/stiker]
āā¾ .rejected [reply image/stiker]
āā¾ .posterize [reply image/stiker]
āā¾ .ps4 [reply image/stiker]
āā¾ .pixelize [reply image/stiker]
āā¾ .missionpassed [reply image/stiker]
āā¾ .moustache [reply image/stiker]
āā¾ .lookwhatkarenhave [reply image/stiker]
āā¾ .jail [reply image/stiker]
āā¾ .invert [reply image/stiker]
āā¾ .instagram [reply image/stiker]
āā¾ .greyscale [reply image/stiker]
āā¾ .glitch2 [reply image/stiker]
āā¾ .gay [reply image/stiker]
āā¾ .frame [reply image/stiker]
āā¾ .fire [reply image/stiker]
āā¾ .distort [reply image/stiker]
āā¾ .dictator [reply image/stiker]
āā¾ .deepfry [reply image/stiker]
āā¾ .ddungeon [reply image/stiker]
āā¾ .circle [reply image/stiker]
āā¾ .challenger [reply image/stiker]
āā¾ .burn [reply image/stiker]
āā¾ .brazzers [reply image/stiker]
āź„ .beautiful [reply image/stiker]


āāāć Sticker Effect ć 
āā¾ .jail [reply image/stiker]
āā¾ .red [reply image/stiker]
āā¾ .gay [reply image/stiker]
āā¾ .bloo [reply image/stiker]
āā¾ .blue [reply image/stiker]
āā¾ .sepia [reply image/stiker]
āā¾ .green [reply image/stiker]
āā¾ .glass [reply image/stiker]
āā¾ .invert [reply image/stiker]
āā¾ .blurple [reply image/stiker]
āā¾ .blurple2 [reply image/stiker]
āā¾ .wasted [reply image/stiker]
āā¾ .passed [reply image/stiker]
āā¾ .triggered [reply image/stiker]
āā¾ .comrade [reply image/stiker]
āā¾ .greyscale [reply image/stiker]
āā¾ .threshold [reply image/stiker]
āā¾ .brightness [reply image/stiker]
āź„ .invertgreyscale [reply image/stiker]


āāāć Download ć 
āā¾ .tiktok [link]
āā¾ .tiktoknowm [link]
āā¾ .tiktokwm [link]
āā¾ .tiktokaudio [link]
āā¾ .ytdl [link]
āā¾ .play [query]
āā¾ .ytmp3 [link]
āā¾ .ytshortmp3 [link]
āā¾ .ytmp4 [link]
āā¾ .ytshorts [link]
āā¾ .facebook [link]
āā¾ .facebooksd [link]
āā¾ .facebookhd [link]
āā¾ .fbaudio [link]
āā¾ .igstory [username]
āā¾ .igdl [link]
āā¾ .igphoto [link]
āā¾ .igvideo [link]
āā¾ .igreels [link]
āā¾ .igtv [link]
āā¾ .soundcloud [link]
āā¾ .gitclone [link repo]
āā¾ .gitrepo [username repo branch]
āā¾ .mediafire [link]
āź„ .twitter link

āāāć Primbon ć
āā¾ .nomorhoki 887435047326
āā¾ .artimimpi [query]
āā¾ .artinama [query]
āā¾ .ramaljodoh
āā¾ .ramaljodohbali
āā¾ .suamiistri
āā¾ .ramalcinta
āā¾ .cocoknama
āā¾ .pasangan
āā¾ .jadiannikah
āā¾ .sifatusaha
āā¾ .rezeki
āā¾ .pekerjaan
āā¾ .nasib
āā¾ .penyakit
āā¾ .tarot
āā¾ .fengshui
āā¾ .haribaik
āā¾ .harisangar
āā¾ .harisial
āā¾ .nagahari
āā¾ .arahrezeki
āā¾ .peruntungan
āā¾ .weton
āā¾ .karakter
āā¾ .keberuntungan
āā¾ .memancing
āā¾ .masasubur
āā¾ .zodiak 
āź„ .shio [query]

āāāć Random Anime ć
āā¾ .loli
āā¾ .neko
āā¾ .waifu
āā¾ .shinobu
āā¾ .megumin
āā¾ .bully
āā¾ .cuddle
āā¾ .cry
āā¾ .hug
āā¾ .awoo
āā¾ .kiss
āā¾ .lick
āā¾ .pat
āā¾ .smug
āā¾ .bonk
āā¾ .yeet
āā¾ .blush
āā¾ .smile
āā¾ .wave
āā¾ .highfive
āā¾ .handhold
āā¾ .nom
āā¾ .bite
āā¾ .glomp
āā¾ .slap
āā¾ .kill
āā¾ .happy
āā¾ .wink
āā¾ .poke
āā¾ .dance
āź„ .cringe

āāāć Voice Change Menu ć
āā¾ .bass
āā¾ .blown
āā¾ .deep
āā¾ .earrape
āā¾ .fast
āā¾ .fat
āā¾ .nightcore
āā¾ .reverse
āā¾ .robot
āā¾ .slow
āā¾ .smooth
āź„ .tupai

āāāć Storage Menu ć
āā¾ .addvn
āā¾ .listvn
āā¾ .delvn
āā¾ .addimage
āā¾ .listimage
āā¾ .delimage
āā¾ .addvideo
āā¾ .listvideo
āā¾ .delvideo
āā¾ .addstik
āā¾ .delstik
āź„ .liststik

āāāć Nsfw & Sfw ć
āā¾ .cuddle
āā¾ .foxgirl
āā¾ .kemonomimi2
āā¾ .woof
āā¾ .holo2
āā¾ .hug
āā¾ .kiss
āā¾ .lizard
āā¾ .meowi
āā¾ .neko2
āā¾ .pat
āā¾ .poke
āā¾ .slap
āā¾ .tickle
āā¾ .baka
āā¾ .smug
āā¾ .neko_sfw
āā¾ .hentai
āā¾ .hentai_gif
āā¾ .spank
āā¾ .blowjob
āā¾ .cumarts
āā¾ .eroyuri
āā¾ .eroneko
āā¾ .erokemonomimi
āā¾ .erokitsune
āā¾ .ero
āā¾ .feet
āā¾ .erofeet
āā¾ .feetgif
āā¾ .femdom
āā¾ .futanari
āā¾ .holoero
āā¾ .holo
āā¾ .keta
āā¾ .kitsune
āā¾ .kemonomimi
āā¾ .pussyart
āā¾ .pussywankgif
āā¾ .girl_solo
āā¾ .girl_solo_gif
āā¾ .tits
āā¾ .trap
āā¾ .yuri
āā¾ .avatar2
āā¾ .anal
āā¾ .bj
āā¾ .boobs
āā¾ .classic
āā¾ .cumsluts
āā¾ .kuni
āā¾ .lesbian
āā¾ .neko
āā¾ .neko_gif
āā¾ .ahegao
āā¾ .bdsm
āā¾ .cuckold
āā¾ .cum
āā¾ .foot
āā¾ .gangbang
āā¾ .glasses
āā¾ .jahy
āā¾ .masturbation
āā¾ .nsfw_neko
āā¾ .orgy
āā¾ .panties
āā¾ .tentacles
āā¾ .thighs
āź„ .zettai

āāāć Ephoto360 Menu ć
āā¾ .youtubegold
āā¾ .youtubesilver
āā¾ .facebookgold
āā¾ .facebooksilver
āā¾ .instagramgold
āā¾ .instagramsilver
āā¾ .twittergold
āā¾ .twittersilver
āā¾ .retrotext
āā¾ .halloweenbats
āā¾ .texthalloween
āā¾ .cardhalloween
āā¾ .birthdaycake
āā¾ .thundertext
āā¾ .icetext
āā¾ .milkcake
āā¾ .snowontext
āā¾ .metalstar
āā¾ .dragonfire
āā¾ .zombie3d
āā¾ .merrycard
āā¾ .generalexam 
āā¾ .viettel
āā¾ .embroider
āā¾ .graffititext
āā¾ .graffititext2
āā¾ .graffititext3
āā¾ .covergraffiti
āā¾ .moderngold
āā¾ .capercut
āā¾ .lovecard
āā¾ .heartflashlight
āā¾ .heartcup
āā¾ .sunglightshadow
āā¾ .graffiti3d
āā¾ .moderngoldsilver
āā¾ .moderngold2
āā¾ .moderngold3
āā¾ .fabrictext
āā¾ .masteryavatar
āā¾ .messagecoffee
āā¾ .announofwin
āā¾ .writeblood
āā¾ .horrorletter
āā¾ .writehorror
āā¾ .shirtclub
āā¾ .angelwing
āā¾ .christmasseason
āā¾ .projectyasuo
āā¾ .lovelycute
āā¾ .womansday
āā¾ .covergamepubg
āā¾ .nameonheart
āā¾ .funnyhalloween
āā¾ .lightningpubg
āā¾ .greetingcardvideo 
āā¾ .christmascard 
āā¾ .galaxybat
āā¾ .writegalaxy
āā¾ .starsnight
āā¾ .noeltext
āā¾ .textcakes
āā¾ .pubgbirthday
āā¾ .galaxywallpaper
āā¾ .pubgglicthvideo 
āā¾ .pubgmascotlogo
āā¾ .realembroidery
āā¾ .vintagetelevision
āā¾ .funnyanimations
āā¾ .glowingtext
āā¾ .textonglass
āā¾ .cartoonstyle
āā¾ .multicolor
āā¾ .watercolor2
āā¾ .textsky
āā¾ .summerbeach
āā¾ .1917text
āā¾ .puppycute
āź„ .rosebirthday


āāāć Textpro Menu ć
āā¾ .halloween2 text|text2
āā¾ .horror text|text2
āā¾ .game8bit text|text2
āā¾ .layered text|text2
āā¾ .glitch2 text|text2
āā¾ .coolg text|text2
āā¾ .coolwg text|text2
āā¾ .realistic text|text2
āā¾ .space3d text|text2
āā¾ .gtiktok text|text2
āā¾ .stone text|text2
āā¾ .marvel text|text2
āā¾ .marvel2 text|text2
āā¾ .pornhub text|text2
āā¾ .avengers text|text2
āā¾ .metalr text|text2
āā¾ .metalg text|text2
āā¾ .metalg2 text|text2
āā¾ .halloween2 text|text2
āā¾ .lion text|text2
āā¾ .wolf_bw text|text2
āā¾ .wolf_g text|text2
āā¾ .ninja text|text2
āā¾ .3dsteel text|text2
āā¾ .horror2 text|text2
āā¾ .lava text|text2
āā¾ .bagel text|text2
āā¾ .blackpink text
āā¾ .rainbow2 text
āā¾ .water_pipe text
āā¾ .halloween text
āā¾ .sketch text
āā¾ .sircuit text
āā¾ .discovery text
āā¾ .metallic2 text
āā¾ .fiction text
āā¾ .demon text
āā¾ .transformer text
āā¾ .berry text
āā¾ .thunder text
āā¾ .magma text
āā¾ .3dstone text
āā¾ .neon text
āā¾ .glitch text
āā¾ .harry_potter text
āā¾ .embossed text
āā¾ .broken text
āā¾ .papercut text
āā¾ .gradient text
āā¾ .glossy text
āā¾ .watercolor text
āā¾ .multicolor text
āā¾ .neon_devil text
āā¾ .underwater text
āā¾ .bear text
āā¾ .wonderfulg text
āā¾ .christmas text
āā¾ .neon_light text
āā¾ .snow text
āā¾ .cloudsky text
āā¾ .luxury2 text
āā¾ .gradient2 text
āā¾ .summer text
āā¾ .writing text
āā¾ .engraved text
āā¾ .summery text
āā¾ .3dglue text
āā¾ .metaldark text
āā¾ .neonlight text
āā¾ .oscar text
āā¾ .minion text
āā¾ .holographic text
āā¾ .purple text
āā¾ .glossyb text
āā¾ .deluxe2 text
āā¾ .glossyc text
āā¾ .fabric text
āā¾ .neonc text
āā¾ .newyear text
āā¾ .newyear2 text
āā¾ .metals text
āā¾ .xmas text
āā¾ .blood text
āā¾ .darkg text
āā¾ .joker text
āā¾ .wicker text
āā¾ .natural text
āā¾ .firework text
āā¾ .skeleton text
āā¾ .balloon text
āā¾ .balloon2 text
āā¾ .balloon3 text
āā¾ .balloon4 text
āā¾ .balloon5 text
āā¾ .balloon6 text
āā¾ .balloon7 text
āā¾ .steel text
āā¾ .gloss text
āā¾ .denim text
āā¾ .decorate text
āā¾ .decorate2 text
āā¾ .peridot text
āā¾ .rock text
āā¾ .glass text
āā¾ .glass2 text
āā¾ .glass3 text
āā¾ .glass4 text
āā¾ .glass5 text
āā¾ .glass6 text
āā¾ .glass7 text
āā¾ .glass8 text
āā¾ .captain_as2 text
āā¾ .robot text
āā¾ .equalizer text
āā¾ .toxic text
āā¾ .sparkling text
āā¾ .sparkling2 text
āā¾ .sparkling3 text
āā¾ .sparkling4 text
āā¾ .sparkling5 text
āā¾ .sparkling6 text
āā¾ .sparkling7 text
āā¾ .decorative text
āā¾ .chocolate text
āā¾ .strawberry text
āā¾ .koifish text
āā¾ .bread text
āā¾ .matrix text
āā¾ .blood2 text
āā¾ .neonligth2 text
āā¾ .thunder2 text
āā¾ .3dbox text
āā¾ .neon2 text
āā¾ .roadw text
āā¾ .bokeh text
āā¾ .gneon text
āā¾ .advanced text
āā¾ .dropwater text
āā¾ .wall text
āā¾ .chrismast text
āā¾ .honey text
āā¾ .drug text
āā¾ .marble text
āā¾ .marble2 text
āā¾ .ice text
āā¾ .juice text
āā¾ .rusty text
āā¾ .abstra text
āā¾ .biscuit text
āā¾ .wood text
āā¾ .scifi text
āā¾ .metalr text
āā¾ .purpleg text
āā¾ .shiny text 
āā¾ .jewelry text
āā¾ .jewelry2 text
āā¾ .jewelry3 text
āā¾ .jewelry4 text
āā¾ .jewelry5 text
āā¾ .jewelry6 text
āā¾ .jewelry7 text
āā¾ .jewelry8 text
āā¾ .metalh text
āā¾ .golden text
āā¾ .glitter text
āā¾ .glitter2 text
āā¾ .glitter3 text
āā¾ .glitter4 text
āā¾ .glitter5 text
āā¾ .glitter6 text
āā¾ .glitter7 text
āā¾ .metale text
āā¾ .carbon text
āā¾ .candy text
āā¾ .metalb text
āā¾ .gemb text
āā¾ .3dchrome text
āā¾ .metalb2 text
āā¾ .metalg text
āź„ .metalg text


āāāć Others ć
āā¾ .afk [reason]
āā¾ .translate kode_bahasa text
āā¾ .kalkulator [query]
āā¾ .smeme [text]
āā¾ .smeme2 [text|text]
āā¾ .memegen [text|text]
āź„

āāāć Game Menu ć
āā¾ .kuismath
āā¾ .tebakgambar
āā¾ .tebakkata
āā¾ .tebakbendera
āā¾ .tebakkalimat
āā¾ .tebaksiapa
āā¾ .tebakkabupaten
āā¾ .tebakkimia
āā¾ .tebaklirik
āā¾ .tebaktebakan
āā¾ .tekateki
āā¾ .susunkata
āź„ .caklontong


āāāć Asupan Menu ć
āā¾ .chika
āā¾ .delvira
āā¾ .ayu
āā¾ .bunga
āā¾ .aura
āā¾ .nisa
āā¾ .ziva
āā¾ .yana
āā¾ .viona
āā¾ .syania
āā¾ .riri
āā¾ .syifa
āā¾ .mama_gina
āā¾ .alcakenya
āā¾ .mangayutri
āā¾ .rikagusriani
āā¾ .asupan
āā¾ .bocil
āā¾ .geayubi
āā¾ .santuy
āā¾ .ukhty
āź„ .syifa

āāāć Telegram Sticker ć
āā¾ .awoawo
āā¾ .benedict
āā¾ .chat
āā¾ .dbfly
āā¾ .dino_kuning
āā¾ .doge
āā¾ .gojosatoru
āā¾ .hope_boy
āā¾ .jisoo
āā¾ .kr_robot
āā¾ .kucing
āā¾ .lonte
āā¾ .manusia_lidi
āā¾ .menjamet
āā¾ .meow
āā¾ .nicholas
āā¾ .patrick
āā¾ .popoci
āā¾ .sponsbob
āā¾ .kawan_sponsbob
āź„ .tyni

āāāć Random Cewe ć
āā¾ .china 
āā¾ .indonesia 
āā¾ .malaysia 
āā¾ .thailand 
āā¾ .korea 
āā¾ .japan 
āā¾ .vietnam 
āā¾ .jenni 
āā¾ .jiso 
āā¾ .lisa  
āź„ .rose

āāāć Logo Menu ć
āā¾ .coverbannerlol text|heroes
āā¾ .pubglogomaker text|style
āā¾ .colorfulpubg text|color
āā¾ .astronotspace text|style
āā¾ .wallpaperaov text|heroes
āā¾ .maketeamlogo text|style
āā¾ .circlemarcotteam text|logo
āā¾ .wallpaperml text|heroes
āā¾ .dragonballfb text|character
āā¾ .bannerofaov text|character
āā¾ .effect3donbeach text|background
āā¾ .cutegirlgamer text|logo
āā¾ .footballteam text|logo
āā¾ .beautifulshimmering text|champion
āā¾ .pubgcutelogo text|logo
āā¾ .elegantrotation text|logo
āā¾ .logogamingassasin text|logo
āā¾ .introvideomaker text|logo
āā¾ .gaminglogo4fvs text|logo
āā¾ .blueneon text|logo
āā¾ .metalmascot text|logo
āā¾ .anonymous2 text|style
āā¾ .lolpentakill text|style
āā¾ .avatarleagueofking text|style
āā¾ .avatarff text|character
āā¾ .overwatchwallpaper text|character
āā¾ .rovwallpaperhd text|hero
āā¾ .rovwallpaper text|avatar
āā¾ .beautifulgalaxylol text|style
āā¾ .crossfirecover text|character
āā¾ .lolwallpaper text|wallpaper
āā¾ .coverdota2 text|heroes
āā¾ .coverleagueofking text|character
āā¾ .avatar3q360 text|avatar
āā¾ .coverofwarface text|character
āā¾ .newlolavatar text|avatar
āā¾ .csgocover text|background
āā¾ .coverloknew text|hero
āā¾ .coverfblol text|letters
āā¾ .overwatchcover text|hero
āā¾ .crossfirestyle text|avatar
āā¾ .avatarlolbyname text|style
āā¾ .lolcoverbyname text|avatar
āā¾ .cyberhunterfb text|character
āā¾ .coverfreefirefb text|character
āā¾ .gamingmascot text|style
āā¾ .coveronepiecefb text|character
āā¾ .bannerytcsgo text|banner
āā¾ .fbgamepubgcover text|template
āā¾ .banneroflol text|text2|banner
āā¾ .bannerofaov2 text|text2|banner
āā¾ .teamlogo text|text2|background
āā¾ .companylogo2 text|text2|background
āā¾ .companylogo text|text2|background
āā¾ .gradientlogo text|text2|background
āā¾ .pencilsketch text|text2|icon
āā¾ .gunlogogaming text|text2|background
āā¾ .banneroffreefire text|text2|background
āā¾ .letterlogos text|text2|thumb
āā¾ .bannerofoverwatch text|text2|background
āā¾ .bannerofapex text|text2|background
āā¾ .bannerofpubg text|text2|background
āā¾ .mascotstyle text|text2|thumb
āā¾ .logoaccording text|text2|thumb
āź„ .avataroverwatch text|text2|thumb


āāāć Islamic Menu ć
āā¾ .asmaulhusna
āā¾ .kisahnabi [nabi]
āā¾ .jadwalshalat [daerah]
āā¾ .randomquran
āā¾ .randomquran2
āā¾ .listsurah
āā¾ .tafsirsurah [surah]
āź„ .alquranaudio [surah|ayat]

āāāć Sound Menu ć
āā¾ .sound1
āā¾ .sound2
āā¾ .sound3
āā¾ .sound4
āā¾ .sound5
āā¾ .sound6
āā¾ .sound7
āā¾ .sound8
āā¾ .sound9
āā¾ .sound10
āā¾ .sound11
āā¾ .sound12
āā¾ .sound13
āā¾ .sound14
āā¾ .sound15
āā¾ .sound16
āā¾ .sound17
āā¾ .sound18 
āā¾ .sound19
āā¾ .sound20
āā¾ .sound21
āā¾ .sound22
āā¾ .sound23
āā¾ .sound24
āā¾ .sound25
āā¾ .sound26
āā¾ .sound27
āā¾ .sound28
āā¾ .sound29
āā¾ .sound30
āā¾ .sound31
āā¾ .sound32
āā¾ .sound33
āā¾ .sound34
āā¾ .sound35
āā¾ .sound36
āā¾ .sound37
āā¾ .sound38
āā¾ .sound39
āā¾ .sound40
āā¾ .sound41
āā¾ .sound42
āā¾ .sound43
āā¾ .sound44
āā¾ .sound45
āā¾ .sound46
āā¾ .sound47
āā¾ .sound48
āā¾ .sound49
āā¾ .sound50
āā¾ .sound51
āā¾ .sound52
āā¾ .sound53
āā¾ .sound54
āā¾ .sound55
āā¾ .sound56
āā¾ .sound57
āā¾ .sound58
āā¾ .sound59
āā¾ .sound60
āā¾ .sound61
āā¾ .sound62
āā¾ .sound63
āā¾ .sound64
āā¾ .sound65
āā¾ .sound66
āā¾ .sound67
āā¾ .sound68
āā¾ .sound69
āź„ .sound70

āāāć TqTo ć 
āā¾ My God
āā¾ My Parents
āā¾ Fatih A.
āā¾ Ferdi
āā¾ DikaArdnt
āā¾ Mhankbarbar
āā¾ Nurutomo
āā¾ Rashid
āā¾ ZeeoneOfc
āā¾ Penyedia Module
āź„ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*āā ć RULES AND FAQ ć āā*

1. Jangan spam bot. š
2. Jangan telepon bot. āļø
3. Jangan membandingkan bot š

šÆļø Bot tidak atau lambat merespon ?
ā”ļø Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

šÆļø Dimana saya bisa mendapatkan Script dari bot ini ?
ā”ļø Script ini bisa kalian dapatkan di YouTube ZEEONE OFC

šÆļø Boleh saya menambah ke grup?
ā”ļø Untuk itu tergantung dari owner bot sendiri

šÆļø Prefixnya apa ya?
ā”ļø Bot ini menggunakan multi prefix & bisa kamu gunakan tanpa prefix

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

ā ļø Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! 
`
}
exports.welcome = () =>{
	return`š©šŗšššŗš ššššŗ ššššš ššŗš š¤
	
āź„ š­šŗššŗ :
āā¾ š“ššš :
āā¾ š¦š¾šš½š¾š :
āā¾ š šššš :
āź„ šÆšŗšššš šššš¾š šššš ššŗ ššŗk ~`
}
exports.leave = () =>{
	return`Yah kok out š£ Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------ć SOURCE CODE ć ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtube.com/playlist?list=PLFCglBzFPHG7vSQaa9S3P8yfla_d9w-2-
`
}
exports.tos = (ownernomer) => {
    return `
*-------ć DONATE ć -------*

Hai kak āŗļø 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti š
Buat kalian yang sudah donasi bisa kirim bukti
donasi ke owner agar bisa di masukkan ke list donasi

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`āāāć Bot Info ć 
āā¾ !owner
āā¾ !rules
āā¾ !sc
āā¾ !ping
āā¾ !runtime
āā¾ !botstatus
āź„ !donate
`}

exports.ownermenu = (prefix) =>{
return`āāāć Owner ć 
āā¾ !setmenu [query]
āā¾ !setmenu templateLocation
āā¾ !setmenu templateTenor
āā¾ !setmenu katalog
āā¾ !setmenu katalog2
āā¾ !setmenu list
āā¾ !setwm packname|author
āā¾ !sendsesi
āā¾ !listpc
āā¾ !listgc
āā¾ !broadcast [text]
āā¾ !bc [text]
āā¾ !bcgc 
āā¾ !bcimage
āā¾ !bcaudio
āā¾ !bcstiker
āā¾ !bcvn
āā¾ !bcvideo
āā¾ !banuser
āā¾ !unban
āā¾ !banned
āā¾ !listbanned
āā¾ !block
āā¾ !ublock
āā¾ !listblock
āā¾ !addpremium
āā¾ !delpremium
āā¾ !listpremium
āā¾ !nsfw [on/off]
āā¾ !mute [on/off]
āā¾ !autoblok212 [on/off]
āā¾ !banchat
āā¾ !unbanchat
āā¾ !autorespond [on/off]
āā¾ !antiviewonce [on/off]
āā¾ !autobio [on/off]
āā¾ !join [link]
āā¾ !self
āā¾ !public [only bot]
āā¾ !del [reply pesan bot]
āā¾ !pppanjang
āā¾ !setpppanjang
āź„ !setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`āāāć Database ć 
āā¾ !setcmd [reply stiker]
āā¾ !delcmd [reply stiker]
āā¾ !listcmd
āā¾ !absen
āā¾ !cekabsen
āā¾ !deleteabsen
āā¾ !absenstart
āā¾ !addmsg [nama file]
āā¾ !getmsg [nama file]
āā¾ !listmsg
āź„ !delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`āāāć Group ć 
āā¾ !addsewa
āā¾ !delsewa
āā¾ !register
āā¾ !unregister
āā¾ !ceksn
āā¾ !listonline
āā¾ !sider
āā¾ !wm packname|author
āā¾ !infochat
āā¾ !setdesk [text]
āā¾ !setppgrup [reply image]
āā¾ !pppanjanggc
āā¾ !setpppanjanggc
āā¾ !revoke
āā¾ !leave
āā¾ !add [62***]
āā¾ !kick @tag
āā¾ !leave
āā¾ !linkgc
āā¾ !welcome [on/off]
āā¾ !goodbye [on/off]
āā¾ !demotedetect [on/off]
āā¾ !promotedetect  [on/off]
āā¾ !setwelcome
āā¾ !updatewelcome
āā¾ !delwelcome
āā¾ !cekwelcome
āā¾ !setgoodbye
āā¾ !updategoodbye
āā¾ !delgoodbye
āā¾ !cekgoodbye
āā¾ !setpromote
āā¾ !updatepromote
āā¾ !setdemote
āā¾ !updatedemote
āā¾ !cekpromote
āā¾ !cekdemote
āā¾ !delpromote
āā¾ !deldemote
āā¾ !nsfw [on/off]
āā¾ !antilink [on/off]
āā¾ !take packname|author
āā¾ !group [open/close]
āā¾ !tagall [text]
āź„ !hidetag [text]
`}

exports.anime = (prefix) =>{
	return`āāāć Anime ć 
āā¾ !quotesanime
āā¾ !anime [query]
āā¾ !animeinfo
āā¾ !manga [query]
āź„ !character [query]
`}

exports.tag = (prefix) =>{
	return`āāāć Tag ć 
āā¾ !stickertag
āā¾ !videotag [query]
āā¾ !vntag [query]
āź„ !imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`āāāć Stalking ć 
āā¾ !igstalk [username]
āā¾ !ghstalk [username]
āź„ !ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`āāāć Search ć 
āā¾ !ytsearch [query]
āā¾ !wallpaper [query]
āā¾ !google [query]
āā¾ !wikimedia [query]
āā¾ !apksearch
āā¾ !findapk
āā¾ !hentai
āā¾ !wattpad [query]
āā¾ !webtoons [query]
āā¾ !drakor [query]
āź„ !pinterest [query]
`}

exports.converter = (prefix) =>{
	return`āāāć Converter ć 
āā¾ !emoji [š­]
āā¾ !emojimix [š­+š©]
āā¾ !toaudio [video]
āā¾ !tomp3 [video]
āā¾ !tovn [video]
āā¾ !stiker [reply image]
āā¾ !tourl [image/video]
āā¾ !togif [sticker]
āā¾ !tomp4 [sticker]
āź„${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`āāāć Image Effect ć 
āā¾ !wanted [reply image/stiker]
āā¾ !utatoo [reply image/stiker]
āā¾ !unsharpen [reply image/stiker]
āā¾ !thanos [reply image/stiker]
āā¾ !sniper [reply image/stiker]
āā¾ !sharpen [reply image/stiker]
āā¾ !sepia [reply image/stiker]
āā¾ !scary [reply image/stiker]
āā¾ !rip [reply image/stiker]
āā¾ !redple [reply image/stiker]
āā¾ !rejected [reply image/stiker]
āā¾ !posterize [reply image/stiker]
āā¾ !ps4 [reply image/stiker]
āā¾ !pixelize [reply image/stiker]
āā¾ !missionpassed [reply image/stiker]
āā¾ !moustache [reply image/stiker]
āā¾ !lookwhatkarenhave [reply image/stiker]
āā¾ !jail [reply image/stiker]
āā¾ !invert [reply image/stiker]
āā¾ !instagram [reply image/stiker]
āā¾ !greyscale [reply image/stiker]
āā¾ !glitch [reply image/stiker]
āā¾ !gay [reply image/stiker]
āā¾ !frame [reply image/stiker]
āā¾ !fire [reply image/stiker]
āā¾ !distort [reply image/stiker]
āā¾ !dictator [reply image/stiker]
āā¾ !deepfry [reply image/stiker]
āā¾ !ddungeon [reply image/stiker]
āā¾ !circle [reply image/stiker]
āā¾ !challenger [reply image/stiker]
āā¾ !burn [reply image/stiker]
āā¾ !brazzers [reply image/stiker]
āź„ !beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`āāāć Sticker Effect ć 
āā¾ !jail [reply image/stiker]
āā¾ !red [reply image/stiker]
āā¾ !gay [reply image/stiker]
āā¾ !bloo [reply image/stiker]
āā¾ !blue [reply image/stiker]
āā¾ !sepia [reply image/stiker]
āā¾ !green [reply image/stiker]
āā¾ !glass [reply image/stiker]
āā¾ !invert [reply image/stiker]
āā¾ !blurple [reply image/stiker]
āā¾ !blurple2 [reply image/stiker]
āā¾ !wasted [reply image/stiker]
āā¾ !passed [reply image/stiker]
āā¾ !triggered [reply image/stiker]
āā¾ !comrade [reply image/stiker]
āā¾ !greyscale [reply image/stiker]
āā¾ !threshold [reply image/stiker]
āā¾ !brightness [reply image/stiker]
āź„ !invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`āāāć Download ć 
āā¾ !tiktok [link]
āā¾ !tiktoknowm [link]
āā¾ !tiktokwm [link]
āā¾ !tiktokaudio [link]
āā¾ !ytdl [link]
āā¾ !play [query]
āā¾ !ytmp3 [link]
āā¾ !ytshortmp3 [link]
āā¾ !ytmp4 [link]
āā¾ !ytshorts [link]
āā¾ !facebook [link]
āā¾ !facebooksd [link]
āā¾ !facebookhd [link]
āā¾ !fbaudio [link]
āā¾ !igstory [username]
āā¾ !igdl [link]
āā¾ !igphoto [link]
āā¾ !igvideo [link]
āā¾ !igreels [link]
āā¾ !igtv [link]
āā¾ !soundcloud [link]
āā¾ !gitclone [link repo]
āā¾ !gitrepo [username repo branch]
āā¾ !mediafire [link]
āź„ !twitter link
`
}

exports.ranime = (prefix) =>{
	return`āāāć Random Anime ć
āā¾ !loli
āā¾ !neko
āā¾ !waifu
āā¾ !shinobu
āā¾ !megumin
āā¾ !bully
āā¾ !cuddle
āā¾ !cry
āā¾ !hug
āā¾ !awoo
āā¾ !kiss
āā¾ !lick
āā¾ !pat
āā¾ !smug
āā¾ !bonk
āā¾ !yeet
āā¾ !blush
āā¾ !smile
āā¾ !wave
āā¾ !highfive
āā¾ !handhold
āā¾ !nom
āā¾ !bite
āā¾ !glomp
āā¾ !slap
āā¾ !kill
āā¾ !happy
āā¾ !wink
āā¾ !poke
āā¾ !dance
āź„ !cringe
`
}

exports.nsfw = (prefix) =>{
	return`āāāć Nsfw & Sfw ć
āā¾ !cuddle
āā¾ !feed
āā¾ !foxgirl
āā¾ !kemonomimi2
āā¾ !woof
āā¾ !holo2
āā¾ !hug
āā¾ !kiss
āā¾ !lizard
āā¾ !meowi
āā¾ !neko2
āā¾ !pat
āā¾ !poke
āā¾ !slap
āā¾ !tickle
āā¾ !baka
āā¾ !smug
āā¾ !neko_sfw
āā¾ !hentai
āā¾ !hentai_gif
āā¾ !spank
āā¾ !blowjob
āā¾ !cumarts
āā¾ !eroyuri
āā¾ !eroneko
āā¾ !erokemonomimi
āā¾ !erokitsune
āā¾ !ero
āā¾ !feet
āā¾ !erofeet
āā¾ !feetgif
āā¾ !femdom
āā¾ !futanari
āā¾ !hentai
āā¾ !holoero
āā¾ !holo
āā¾ !keta
āā¾ !kitsune
āā¾ !kemonomimi
āā¾ !pussyart
āā¾ !pussywankgif
āā¾ !girl_solo
āā¾ !girl_solo_gif
āā¾ !tits
āā¾ !trap
āā¾ !yuri
āā¾ !avatar2
āā¾ !anal
āā¾ !bj
āā¾ !boobs
āā¾ !classic
āā¾ !cumsluts
āā¾ !kuni
āā¾ !lesbian
āā¾ !neko
āā¾ !neko_gif
āā¾ !ahegao
āā¾ !bdsm
āā¾ !cuckold
āā¾ !cum
āā¾ !foot
āā¾ !gangbang
āā¾ !glasses
āā¾ !jahy
āā¾ !masturbation
āā¾ !nsfw_neko
āā¾ !orgy
āā¾ !panties
āā¾ !tentacles
āā¾ !thighs
āź„ !zettai
`
}

exports.textpro = (prefix) =>{
	return`āāāć Textpro Menu ć
āā¾ !halloween2 text|text2
āā¾ !horror text|text2
āā¾ !game8bit text|text2
āā¾ !layered text|text2
āā¾ !glitch2 text|text2
āā¾ !coolg text|text2
āā¾ !coolwg text|text2
āā¾ !realistic text|text2
āā¾ !space3d text|text2
āā¾ !gtiktok text|text2
āā¾ !stone text|text2
āā¾ !marvel text|text2
āā¾ !marvel2 text|text2
āā¾ !pornhub text|text2
āā¾ !avengers text|text2
āā¾ !metalr text|text2
āā¾ !metalg text|text2
āā¾ !metalg2 text|text2
āā¾ !halloween2 text|text2
āā¾ !lion text|text2
āā¾ !wolf_bw text|text2
āā¾ !wolf_g text|text2
āā¾ !ninja text|text2
āā¾ !3dsteel text|text2
āā¾ !horror2 text|text2
āā¾ !lava text|text2
āā¾ !bagel text|text2
āā¾ !blackpink text
āā¾ !rainbow2 text
āā¾ !water_pipe text
āā¾ !halloween text
āā¾ !sketch text
āā¾ !sircuit text
āā¾ !discovery text
āā¾ !metallic2 text
āā¾ !fiction text
āā¾ !demon text
āā¾ !transformer text
āā¾ !berry text
āā¾ !thunder text
āā¾ !magma text
āā¾ !3dstone text
āā¾ !neon text
āā¾ !glitch text
āā¾ !harry_potter text
āā¾ !embossed text
āā¾ !broken text
āā¾ !papercut text
āā¾ !gradient text
āā¾ !glossy text
āā¾ !watercolor text
āā¾ !multicolor text
āā¾ !neon_devil text
āā¾ !underwater text
āā¾ !bear text
āā¾ !wonderfulg text
āā¾ !christmas text
āā¾ !neon_light text
āā¾ !snow text
āā¾ !cloudsky text
āā¾ !luxury2 text
āā¾ !gradient2 text
āā¾ !summer text
āā¾ !writing text
āā¾ !engraved text
āā¾ !summery text
āā¾ !3dglue text
āā¾ !metaldark text
āā¾ !neonlight text
āā¾ !oscar text
āā¾ !minion text
āā¾ !holographic text
āā¾ !purple text
āā¾ !glossyb text
āā¾ !deluxe2 text
āā¾ !glossyc text
āā¾ !fabric text
āā¾ !neonc text
āā¾ !newyear text
āā¾ !newyear2 text
āā¾ !metals text
āā¾ !xmas text
āā¾ !blood text
āā¾ !darkg text
āā¾ !joker text
āā¾ !wicker text
āā¾ !natural text
āā¾ !firework text
āā¾ !skeleton text
āā¾ !balloon text
āā¾ !balloon2 text
āā¾ !balloon3 text
āā¾ !balloon4 text
āā¾ !balloon5 text
āā¾ !balloon6 text
āā¾ !balloon7 text
āā¾ !steel text
āā¾ !gloss text
āā¾ !denim text
āā¾ !decorate text
āā¾ !decorate2 text
āā¾ !peridot text
āā¾ !rock text
āā¾ !glass text
āā¾ !glass2 text
āā¾ !glass3 text
āā¾ !glass4 text
āā¾ !glass5 text
āā¾ !glass6 text
āā¾ !glass7 text
āā¾ !glass8 text
āā¾ !captain_as2 text
āā¾ !robot text
āā¾ !equalizer text
āā¾ !toxic text
āā¾ !sparkling text
āā¾ !sparkling2 text
āā¾ !sparkling3 text
āā¾ !sparkling4 text
āā¾ !sparkling5 text
āā¾ !sparkling6 text
āā¾ !sparkling7 text
āā¾ !decorative text
āā¾ !chocolate text
āā¾ !strawberry text
āā¾ !koifish text
āā¾ !bread text
āā¾ !matrix text
āā¾ !blood2 text
āā¾ !neonligth2 text
āā¾ !thunder2 text
āā¾ !3dbox text
āā¾ !neon2 text
āā¾ !roadw text
āā¾ !bokeh text
āā¾ !gneon text
āā¾ !advanced text
āā¾ !dropwater text
āā¾ !wall text
āā¾ !chrismast text
āā¾ !honey text
āā¾ !drug text
āā¾ !marble text
āā¾ !marble2 text
āā¾ !ice text
āā¾ !juice text
āā¾ !rusty text
āā¾ !abstra text
āā¾ !biscuit text
āā¾ !wood text
āā¾ !scifi text
āā¾ !metalr text
āā¾ !purpleg text
āā¾ !shiny text 
āā¾ !jewelry text
āā¾ !jewelry2 text
āā¾ !jewelry3 text
āā¾ !jewelry4 text
āā¾ !jewelry5 text
āā¾ !jewelry6 text
āā¾ !jewelry7 text
āā¾ !jewelry8 text
āā¾ !metalh text
āā¾ !golden text
āā¾ !glitter text
āā¾ !glitter2 text
āā¾ !glitter3 text
āā¾ !glitter4 text
āā¾ !glitter5 text
āā¾ !glitter6 text
āā¾ !glitter7 text
āā¾ !metale text
āā¾ !carbon text
āā¾ !candy text
āā¾ !metalb text
āā¾ !gemb text
āā¾ !3dchrome text
āā¾ !metalb2 text
āā¾ !metalg text
āź„ !metalg text
`
}


exports.other = (prefix) =>{
return`āāāć Others ć
āā¾ !ttp [text]
āā¾ !attp [text]
āā¾ !afk [reason]
āā¾ !translate kode_bahasa text
āā¾ !kalkulator [query]
āā¾ !smeme [text]
āā¾ !smeme2 [text|text]
āź„ !memegen [text|text]
`
}
exports.game = (prefix) =>{
return`āāāć Game Menu ć
āā¾ !kuismath
āā¾ !tebakgambar
āā¾ !tebakkata
āā¾ !tebakbendera
āā¾ !tebakkalimat
āā¾ !tebaksiapa
āā¾ !tebakkabupaten
āā¾ !tebakkimia
āā¾ !tebaklirik
āā¾ !tebaktebakan
āā¾ !tekateki
āā¾ !susunkata
āź„ !caklontong
`
}
exports.asupan = (prefix) =>{
return`āāāć Asupan Menu ć
āā¾ !chika
āā¾ !delvira
āā¾ !ayu
āā¾ !bunga
āā¾ !aura
āā¾ !nisa
āā¾ !ziva
āā¾ !yana
āā¾ !viona
āā¾ !syania
āā¾ !riri
āā¾ !syifa
āā¾ !mama_gina
āā¾ !alcakenya
āā¾ !mangayutri
āā¾ !rikagusriani
āā¾ !asupan
āā¾ !bocil
āā¾ !geayubi
āā¾ !santuy
āā¾ !ukhty
āź„ !syifa
`
}
exports.cecan = (prefix) =>{
return`āāāć Random Cewe ć
āā¾ !china 
āā¾ !indonesia 
āā¾ !malaysia 
āā¾ !thailand 
āā¾ !korea 
āā¾ !japan 
āā¾ !vietnam 
āā¾ !jenni 
āā¾ !jiso 
āā¾ !lisa  
āź„ !rose
`
}

exports.tqto = () =>{
	return`āāāć TqTo ć 
āā¾ My God
āā¾ My Parents
āā¾ Fatih A.
āā¾ Ferdi
āā¾ DikaArdnt
āā¾ Mhankbarbar
āā¾ Nurutomo
āā¾ Rashid
āā¾ ZeeoneOfc
āā¾ Penyedia Module
āź„ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`āāāć Primbon ć
āā¾ !nomorhoki 887435047326
āā¾ !artimimpi [query]
āā¾ !artinama [query]
āā¾ !ramaljodoh
āā¾ !ramaljodohbali
āā¾ !suamiistri
āā¾ !ramalcinta
āā¾ !cocoknama
āā¾ !pasangan
āā¾ !jadiannikah
āā¾ !sifatusaha
āā¾ !rezeki
āā¾ !pekerjaan
āā¾ !nasib
āā¾ !penyakit
āā¾ !tarot
āā¾ !fengshui
āā¾ !haribaik
āā¾ !harisangar
āā¾ !harisial
āā¾ !nagahari
āā¾ !arahrezeki
āā¾ !peruntungan
āā¾ !weton
āā¾ !karakter
āā¾ !keberuntungan
āā¾ !memancing
āā¾ !masasubur
āā¾ !zodiak 
āź„ !shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`āāāć Telegram Sticker ć
āā¾ !awoawo
āā¾ !benedict
āā¾ !chat
āā¾ !dbfly
āā¾ !dino_kuning
āā¾ !doge
āā¾ !gojosatoru
āā¾ !hope_boy
āā¾ !jisoo
āā¾ !kr_robot
āā¾ !kucing
āā¾ !lonte
āā¾ !manusia_lidi
āā¾ !menjamet
āā¾ !meow
āā¾ !nicholas
āā¾ !patrick
āā¾ !popoci
āā¾ !sponsbob
āā¾ !kawan_sponsbob
āź„ !tyni
`}

exports.ephotomenu = (prefix) =>{
	return`āāāć Ephoto360 Menu ć
āā¾ !youtubegold text
āā¾ !youtubesilver text
āā¾ !facebookgold text
āā¾ !facebooksilver text
āā¾ !instagramgold text
āā¾ !instagramsilver text
āā¾ !twittergold text
āā¾ !twittersilver text
āā¾ !retrotext text
āā¾ !halloweenbats text
āā¾ !texthalloween text
āā¾ !cardhalloween text
āā¾ !birthdaycake text
āā¾ !thundertext text
āā¾ !icetext text
āā¾ !milkcake text
āā¾ !snowontext text
āā¾ !metalstar text
āā¾ !dragonfire text
āā¾ !zombie3d text
āā¾ !merrycard text
āā¾ !generalexam text 
āā¾ !viettel text
āā¾ !embroider text
āā¾ !graffititext text
āā¾ !graffititext2 text
āā¾ !graffititext3 text
āā¾ !covergraffiti text
āā¾ !moderngold text
āā¾ !capercut text
āā¾ !lovecard text
āā¾ !heartflashlight text
āā¾ !heartcup text
āā¾ !sunglightshadow text
āā¾ !graffiti3d text
āā¾ !moderngoldsilver text
āā¾ !moderngold2 text
āā¾ !moderngold3 text
āā¾ !fabrictext text
āā¾ !masteryavatar text
āā¾ !messagecoffee text
āā¾ !announofwin text
āā¾ !writeblood text
āā¾ !horrorletter text
āā¾ !writehorror text
āā¾ !shirtclub text
āā¾ !angelwing text
āā¾ !christmasseason text
āā¾ !projectyasuo text
āā¾ !lovelycute text
āā¾ !womansday text
āā¾ !covergamepubg text
āā¾ !nameonheart text
āā¾ !funnyhalloween text
āā¾ !lightningpubg text
āā¾ !greetingcardvideo text 
āā¾ !christmascard text 
āā¾ !galaxybat text
āā¾ !writegalaxy text
āā¾ !starsnight text
āā¾ !noeltext text
āā¾ !textcakes text
āā¾ !pubgbirthday text
āā¾ !galaxywallpaper text
āā¾ !pubgglicthvideo text 
āā¾ !pubgmascotlogo text
āā¾ !realembroidery text
āā¾ !vintagetelevision text
āā¾ !funnyanimations text
āā¾ !glowingtext text
āā¾ !textonglass text
āā¾ !cartoonstyle text
āā¾ !multicolor text
āā¾ !watercolor2 text
āā¾ !textsky text
āā¾ !summerbeach text
āā¾ !1917text text
āā¾ !puppycute text
āā¾ !rosebirthday text
āā¾ !steellettering text|text2
āā¾ !letterstext text|text2
āā¾ !barcashirt text|text2
āā¾ !premiercup text|text2
āā¾ !stylepoligon text|text2
āā¾ !lifebuoys text|text2
āź„ !juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`āāāć Logo Menu ć
āā¾ !coverbannerlol text|heroes
āā¾ !pubglogomaker text|style
āā¾ !colorfulpubg text|color
āā¾ !astronotspace text|style
āā¾ !wallpaperaov text|heroes
āā¾ !maketeamlogo text|style
āā¾ !circlemarcotteam text|logo
āā¾ !wallpaperml text|heroes
āā¾ !dragonballfb text|character
āā¾ !bannerofaov text|character
āā¾ !effect3donbeach text|background
āā¾ !cutegirlgamer text|logo
āā¾ !footballteam text|logo
āā¾ !beautifulshimmering text|champion
āā¾ !pubgcutelogo text|logo
āā¾ !elegantrotation text|logo
āā¾ !logogamingassasin text|logo
āā¾ !introvideomaker text|logo
āā¾ !gaminglogo4fvs text|logo
āā¾ !blueneon text|logo
āā¾ !metalmascot text|logo
āā¾ !anonymous2 text|style
āā¾ !lolpentakill text|style
āā¾ !avatarleagueofking text|style
āā¾ !avatarff text|character
āā¾ !overwatchwallpaper text|character
āā¾ !rovwallpaperhd text|hero
āā¾ !rovwallpaper text|avatar
āā¾ !beautifulgalaxylol text|style
āā¾ !crossfirecover text|character
āā¾ !lolwallpaper text|wallpaper
āā¾ !coverdota2 text|heroes
āā¾ !coverleagueofking text|character
āā¾ !avatar3q360 text|avatar
āā¾ !coverofwarface text|character
āā¾ !newlolavatar text|avatar
āā¾ !csgocover text|background
āā¾ !coverloknew text|hero
āā¾ !coverfblol text|letters
āā¾ !overwatchcover text|hero
āā¾ !crossfirestyle text|avatar
āā¾ !avatarlolbyname text|style
āā¾ !lolcoverbyname text|avatar
āā¾ !cyberhunterfb text|character
āā¾ !coverfreefirefb text|character
āā¾ !gamingmascot text|style
āā¾ !coveronepiecefb text|character
āā¾ !bannerytcsgo text|banner
āā¾ !fbgamepubgcover text|template
āā¾ !banneroflol text|text2|banner
āā¾ !bannerofaov2 text|text2|banner
āā¾ !teamlogo text|text2|background
āā¾ !companylogo2 text|text2|background
āā¾ !companylogo text|text2|background
āā¾ !gradientlogo text|text2|background
āā¾ !pencilsketch text|text2|icon
āā¾ !gunlogogaming text|text2|background
āā¾ !banneroffreefire text|text2|background
āā¾ !letterlogos text|text2|thumb
āā¾ !bannerofoverwatch text|text2|background
āā¾ !bannerofapex text|text2|background
āā¾ !bannerofpubg text|text2|background
āā¾ !mascotstyle text|text2|thumb
āā¾ !logoaccording text|text2|thumb
āź„ !avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`āāāć Islamic Menu ć
āā¾ !asmaulhusna
āā¾ !kisahnabi [nabi]
āā¾ !jadwalshalat [daerah]
āā¾ !randomquran
āā¾ !randomquran2
āā¾ !listsurah
āā¾ !tafsirsurah [surah]
āź„ !alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`āāāć Anonymous ć
āā¾ !anonymous 
āā¾ !start
āā¾ !skip [daerah]
āź„ !stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`āāāć Store Menu ć
āā¾ !list
āā¾ !addlist [key|respond]
āā¾ !dellist [key]
āā¾ !update [key|respond]
āā¾ !store
āā¾ !kali
āā¾ !bagi
āā¾ !tambah
āā¾ !kurang
āā¾ !kalkulator
āā¾ !setproses
āā¾ !updateproses
āā¾ !cekproses
āā¾ !delproses
āā¾ !setdone
āā¾ !updatedone
āā¾ !cekdone
āā¾ !deldone
āā¾ !pay
āā¾ !setcaptionpay
āā¾ !setpaysewa
āā¾ !proses
āź„ !done
`
}

exports.voiceChange = (prefix) =>{
	return`āāāć Voice Change Menu ć
āā¾ !bass
āā¾ !blown
āā¾ !deep
āā¾ !earrape
āā¾ !fast
āā¾ !fat
āā¾ !nightcore
āā¾ !reverse
āā¾ !robot
āā¾ !slow
āā¾ !smooth
āź„ !tupai
`
}
exports.storagemenu = (prefix) =>{
	return`āāāć Storage Menu ć
āā¾ !addvn
āā¾ !listvn
āā¾ !delvn
āā¾ !addimage
āā¾ !listimage
āā¾ !delimage
āā¾ !addvideo
āā¾ !listvideo
āā¾ !delvideo
āā¾ !addstik
āā¾ !delstik
āź„ !liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`āāāć Rpg Games ć
āā¾ !adventure
āā¾ !weekly
āā¾ !use
āā¾ !transfer
āā¾ !slot
āā¾ !shop
āā¾ !profile
āā¾ !pasar
āā¾ !ojek
āā¾ !open
āā¾ !nguli
āā¾ !narik
āā¾ !nabung
āā¾ !monthly
āā¾ !mining
āā¾ !merampok
āā¾ !mancing
āā¾ !kolam
āā¾ !koboy
āā¾ !kerja
āā¾ !kandang
āā¾ !judi
āā¾ !inventory
āā¾ !hourly
āā¾ !fishop
āā¾ !feed
āā¾ !duel
āā¾ !daily
āā¾ !craft
āā¾ !cooldown
āā¾ !cook
āā¾ !collect
āā¾ !chop
āā¾ !casino
āā¾ !buy
āā¾ !bank 
āā¾ !bansos
āā¾ !berdagang
āā¾ !berkebon
āź„ !build
`
}

exports.photooxy = (prefix)=>{
	return`āāāć Photooxy Menu ć
āā¾ !battlegrounds-logo
āā¾ !battlefield4
āā¾ !text-8bit
āā¾ !typography-flower 
āā¾ !under-flower 
āā¾ !bevel-text 
āā¾ !silk-text 
āā¾ !sweet-andy 
āā¾ !smoke-typography 
āā¾ !carvedwood 
āā¾ !scary-cemetery 
āā¾ !royallook 
āā¾ !coffeecup2 
āā¾ !illuminated 
āā¾ !harry-potter2 //
āā¾ !woodblack //
āā¾ !butterfly-reflection //
āā¾ !watermelon // 
āā¾ !striking // 
āā¾ !metallicglow //
āā¾ !rainbow-text 
āā¾ !birthday-cake 
āā¾ !embroidery // 
āā¾ !crisp 
āā¾ !flaming 
āā¾ !furtext 
āā¾ !nightsky 
āā¾ !glow-rainbow 
āā¾ !gradient-avatar 
āā¾ !white-cube // 
āā¾ !honey-text // 
āā¾ !vintage-style //
āā¾ !glowing-3d // 
āā¾ !army-camouflage 
āā¾ !graffiti-cover 
āā¾ !rainbow-shine 
āā¾ !smoky-neon 
āā¾ !quotes-underfall //
āā¾ !layered-leaves 
āā¾ !vector-nature 
āā¾ !yellow-rose 
āā¾ !love-text 
āā¾ !underwater-ocean 
āā¾ !nature-text 
āā¾ !wolf-metal 
āā¾ !summer-text 
āā¾ !wooden-board //
āā¾ !flower-heart
āā¾ !quote-wood 
āā¾ !love-text 
āā¾ !quotes-undergrass 
āā¾ !naruto-banner 
āā¾ !love-message 
āā¾ !textoncup2 
āā¾ !burn-paper 
āā¾ !smoke 
āā¾ !romantic-messages 
āā¾ !shadow-sky 
āā¾ !text-cup 
āź„ !coffecup
`
}
exports.soundmenu = (prefix) =>{
return`āāāć Sound Menu ć
āā¾ !sound1
āā¾ !sound2
āā¾ !sound3
āā¾ !sound4
āā¾ !sound5
āā¾ !sound6
āā¾ !sound7
āā¾ !sound8
āā¾ !sound9
āā¾ !sound10
āā¾ !sound11
āā¾ !sound12
āā¾ !sound13
āā¾ !sound14
āā¾ !sound15
āā¾ !sound16
āā¾ !sound17
āā¾ !sound18 
āā¾ !sound19
āā¾ !sound20
āā¾ !sound21
āā¾ !sound22
āā¾ !sound23
āā¾ !sound24
āā¾ !sound25
āā¾ !sound26
āā¾ !sound27
āā¾ !sound28
āā¾ !sound29
āā¾ !sound30
āā¾ !sound31
āā¾ !sound32
āā¾ !sound33
āā¾ !sound34
āā¾ !sound35
āā¾ !sound36
āā¾ !sound37
āā¾ !sound38
āā¾ !sound39
āā¾ !sound40
āā¾ !sound41
āā¾ !sound42
āā¾ !sound43
āā¾ !sound44
āā¾ !sound45
āā¾ !sound46
āā¾ !sound47
āā¾ !sound48
āā¾ !sound49
āā¾ !sound50
āā¾ !sound51
āā¾ !sound52
āā¾ !sound53
āā¾ !sound54
āā¾ !sound55
āā¾ !sound56
āā¾ !sound57
āā¾ !sound58
āā¾ !sound59
āā¾ !sound60
āā¾ !sound61
āā¾ !sound62
āā¾ !sound63
āā¾ !sound64
āā¾ !sound65
āā¾ !sound66
āā¾ !sound67
āā¾ !sound68
āā¾ !sound69
āź„ !sound70
`
}


