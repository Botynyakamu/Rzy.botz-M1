const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
  let name = '@⳹ ❋ཻུ۪۪CREATOR⳹ ❋ཻུ۪۪)'
  number = owner[0].replace(/[^0-9]/g, '')
  let njid = number + '@s.whatsapp.net'
  let onW = await this.isOnWhatsApp(njid) || { isBusiness: false }

  let name2 = ' @⳹ ❋ཻུ۪۪CREATOR⳹ ❋ཻུ۪۪)'
  number2 = owner[1].replace(/[^0-9]/g, '')
  let njid2 = number2 + '@s.whatsapp.net'
  let onW2 = await this.isOnWhatsApp(njid2) || { isBusiness: false }

  let name3 = '@⳹ ❋ཻུ۪۪CREATOR⳹ ❋ཻུ۪۪)'
  number3 = owner[2].replace(/[^0-9]/g, '')
  let njid3 = number3 + '@s.whatsapp.net'
  let onW3 = await this.isOnWhatsApp(njid3) || { isBusiness: false }

let name4 = '@⳹ ❋ཻུ۪۪CREATOR⳹ ❋ཻུ۪۪)'
  number4 = owner[3].replace(/[^0-9]/g, '')
  let njid4 = number4 + '@s.whatsapp.net'
  let onW4 = await this.isOnWhatsApp(njid4) || { isBusiness: false }
  this.send2Button(m.chat, `*Ngapain cari owner??*\n\n*Mau donasi/sewa DLL?.*\n*Di harapkan tidak menelpon/menyepam no owner.*`, name4, 'Menu', '.menu', 'Group Bot', '.gcbot', m)
  this.sendMessage(m.chat, {
    contacts: [{
      displayname: name, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name.replace(/\n/g, '\\n')};;;
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}${onW.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid].vname || this.getName(njid)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {
      displayname: name2, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name2.replace(/\n/g, '\\n')};;;
FN:${name2.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number2}:${PhoneNumber('+' + number2).getNumber('international')}${onW2.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid2].vname || this.getName(njid2)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid2)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {displayname: name3, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name3.replace(/\n/g, '\\n')};;;
FN:${name3.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number3}:${PhoneNumber('+' + number3).getNumber('international')}${onW3.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid3].vname || this.getName(njid3)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid3)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {
      displayname: name4, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name4.replace(/\n/g, '\\n')};;;
FN:${name4.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number4}:${PhoneNumber('+' + number4).getNumber('international')}${onW4.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid4].vname || this.getName(njid4)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid4)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
