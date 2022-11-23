import './style.scss';

// ============================================================= add events
const btn_list = document.querySelectorAll('.body__list-item');

btn_list.forEach(elem => {
    elem.addEventListener('click', (ev) => {
        const target = ev.target as HTMLElement;
        const activeElem: HTMLElement = document.querySelector('.body__btn-active') as HTMLElement;
        const arrObj = {
            arr1: {
                title: 'History',
                text: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
            },
            arr2: {
                title: 'Vision',
                text: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
            },
            arr3: {
                title: 'Goals',
                text: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
            },
        };

        if (target.classList.contains('body__btn-active')) { };

        if (target.classList.contains('body__btn-un_active')) {
            // change classes in buttons
            activeElem.classList.toggle('body__btn-un_active');
            activeElem.classList.toggle('body__btn-active');

            target.classList.toggle('body__btn-un_active');
            target.classList.toggle('body__btn-active');

            // getting number of clicked btn
            const targetNum = target.classList[1].slice(4);

            // getting html elem text
            const info__title = document.querySelector('.info__title');
            const info__text = document.querySelector('.info__text');

            // Dynamically access an Object's Property in TypeScript
            type ObjectKey = keyof typeof arrObj;
            const arrNum = `arr${targetNum}` as ObjectKey;

            // saving new text to html field
            info__title.innerHTML = arrObj[arrNum].title
            info__text.innerHTML = arrObj[arrNum].text;
        };
    });
});
