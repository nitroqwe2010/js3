let person = {
    name: null,
    id : null,
    password : null,
    yoqtirgan : null,
    tuman : null,
}

person.name = prompt('ismigizn kiriting');
person.id = prompt('familiya kiriting');
person.password = prompt('yoshingiz kiriting');
person.yoqtirgan = prompt('yoqtirgan fan kiriting');
person.tuman = prompt('yashaydigan tumanigizni kiriting');
alert ("malumod uchun raxmat")
alert (`sizning ismigizn; ${person.name} \n familiya;  ${person.id} \n sizning yoshingiz; ${person.password} \n yoqtirgan fan; ${person.yoqtirgan} \n tumanigiz; ${person.tuman} `); 