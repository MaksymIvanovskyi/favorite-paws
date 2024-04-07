import React from 'react';
import arrowImage from '../assets/paw-icon.png';
import Duck from '../assets/duck.jpg';
import LazyDog from '../assets/lazy-dog.jpg';
import Sugar from '../assets/sugar.jpg';
import Sowa from '../assets/sowa.jpeg';
import CatCafe from '../assets/cat-cafe.jpg';
import GrandCafe from '../assets/grand-cafe.jpg';
import BerNarDyn from '../assets/ber-nar-dyn.png';
import Akvarel from '../assets/akvarel.jpeg';
import CraftKumpel from '../assets/craft-kumpel.png';
import LvivManufaktura from '../assets/lviv-manufaktura.jpg';
import BurhlyviOplisky from '../assets/burhlyvi-oplisky.png';
import Valentino from '../assets/valentino.jpg';
import MrsGreenwich from '../assets/mrs-greenwich.jpg';
import NaVirmenskiy from '../assets/na-virmenskiy.jpg';
import Papi from '../assets/papi.png';
import MoreRyby from '../assets/more-ryby.jpg';
import EpicCheeseburger from '../assets/epic-cheeseburger.jpg';
import CukorBlack from '../assets/cukor-black.jpg';
import Teddy from '../assets/teddy.jpg';
import Gooddog from '../assets/gooddog.jpg';
import Druzi from '../assets/druzi.jpg';
import Kredens from '../assets/kredens.jpg';
import Dzuga from '../assets/dzuga.jpg';
import Tsikava from '../assets/tsikava.png';
import Shoco from '../assets/shoco.png';
import Marevo from '../assets/marevo.png';
import Bakery from '../assets/cheesebakery.png';
import Dominicanes from '../assets/dominicanes.png';
import Facet from '../assets/facet.jpg';
import Hashtag from '../assets/hashtag.png';
import Friend from '../assets/friend.png';
import Hash from '../assets/hash.png';
import Moment from '../assets/moment.jpg';
import Tutti from '../assets/tutti.png';
import Pidzemellya from '../assets/Pidzemellya.jpg';
import King from '../assets/king.png';

const establishments = [
  {
    "id": 3,
    "name": "Dogs like ducks",
    "description": "«Dogs Like Ducks – перші 100% веганські хот-доги в Україні. Ми використовуємо лише продукти рослинного походження. Dogs Like Ducks уже встигли полюбитись львів’янам та гостям міста у форматі стріт-фуду, в якому ми пропрацювали чотири місяці. Із зростанням попиту та розширенням меню Dogs Like Ducks змінили формат та створили повноцінне кафе», – кажуть у закладі. Вул. Валова, 27. 11:00-20:00, без вихідних",
    "rating": 4,
    "image": Duck
  },
  {
    "id": 4,
    "name": "Лінивий пес",
    "description": "Заклад, який не потребує реклами, про нього і так знають всі, кому тут добре. У цьому пабі ви навіть футбол можете подивитися разом із вашим улюбленцем. Замовляйте пиво, тарілку смаколиків і вболівайте в прекрасній компанії!вул. Краківська 9 щодня, 11:00-21:00 ",
    "rating": 4.5,
    "image": LazyDog
  },
  {
    "id": 5,
    "name": "Цукор",
    "description": "Цукор відрізняється від звичних закладів Львова - це не кав'ярня чи ресторан в класичному розумінні. В Цукрі працюють люди, котрі дружать між собою і поза межами робочого часу, а гостей зустрічають як давніх знайомих - посмішками і щирою гостинністю. ВУЛ. БРАТІВ РОГАТИНЦІВ, 21. Години роботи: 09:30-22:30",
    "rating": 4,
    "image": Sugar
  },
  {
    "id": 6,
    "name": "Sowa",
    "description": "SOWÁ - це сучасне кафе у центрі Львова, місце де завжди затишно та тепло, незважаючи на пору року та погоду за вікном. Вулиця Староєврейська, 40. 10:00-21:00",
    "rating": 4.5,
    "image": Sowa
  },
  {
    "id": 7,
    "name": "Cat Cafe Lviv",
    "description": "Тут Ви отримаєте чудову нагоду за чашечкою запашної кави провести час в компанії самих різноманітних котів та кішок, зробити чудові фото на пам’ять та подарувати тепло й увагу нашим маленьким улюбленцям. площа Генерала Григоренка, 1а. 09:00–23:00",
    "rating": 5,
    "image": CatCafe
  },
  {
    "id": 8,
    "name": "Grand cafe leopolis",
    "description": "Місце, де кавує історія – Grand Cafe Leopolis, де на стінах ви зможете побачити близько 700 фотографій, що розповідають цікавинки та події, які ставалися у Львові протягом багатьох років. За доби фотографії до сьогодення, тут ви дізнаєтесь про такі події, як лижний трамплін на Знесінні, страйки, канатна дорога у Стрийському парку, перші польоти та багато інших пригод. Також, Grand Cafe Leopolis славиться своїм безжально-наркотичним тістечком Леополіс, яке не залишить байдужим жодного гурмана. м. Львів, пл. Ринок, 1. пн – нд 8:00 – 22:30",
    "rating": 4.5,
    "image": GrandCafe
  },
  {
    "id": 9,
    "name": "BER NAR DYN Restaurant",
    "description": "Ресторан BER NAR DYN — це частинка душевного затишку «Вежі Ведмежої» в Карпатах в серці міста Лева! Тут панує атмосфера гостинності, яка проявляється в кожній дрібничці інтер'єру та доповнюється вишуканими нотками смаків у стравах та напоях! Соборна площа 17. Пн-Нд 08:00-22:00",
    "rating": 4,
    "image": BerNarDyn
  },
  {
    "id": 10,
    "name": "Ресторан «Акварель»",
    "description": "Ресторан «Акварель» запрошує своїх гостей у неймовірний світ емоцій. Величезне подвір’я та причал на березі чарівного озера, чудова кухня (українська та європейська) і бездоганне обслуговування, літній майданчик та автомобільна стоянка — все це передбачено для відвідувачів ресторану. Тут зручно розташуються 250 Ваших друзів, знайомих та колег, які завітають на свято — просторий банкетний зал стане чудовим простором для забави.Крім того є можливість замовити номери в готелі, щоб відпочинок залишив тільки приємні спогади! Ласкаво просимо в барвистий світ ресторану «Акварель»!",
    "rating": 4.5,
    "image": Akvarel
  },
  {
    "id": 11,
    "name": "Craft & Kumpel’ Beer Atelier",
    "description": "Пивне Ательє Craft & Kumpel’ — Futura Hub у Львові в новому сучасному арт-просторі Future HUB запрошує пізнати новий кулінарний досвід авантурної кухні та насолодитися крафтовим і класичним пивом власного виробництва. Відчинені для Вас з 12:00 до 24:00.",
    "rating": 4,
    "image": CraftKumpel
  },
  {
    "id": 12,
    "name": "Львівська Мануфактура кави",
    "description": "«Львівська Мануфактура кави»: на пл. Соборній у Львові, тут є широкий вибір кави на будь-який смак. Також різноманітні солодощі та десерти. Вулиця Валова, 16. 	09:00–21:00",
    "rating": 5,
    "image": LvivManufaktura
  },
  {
    "id": 13,
    "name": "Довгі бурхливі оплески",
    "description": "Під «Довгі Бурхливі Оплески» зустрічайте новий, крутий, сучасний та стильний ПАБ, де можна поїсти, випити й класно відпочити! Фішка закладу: стендапи, накидони, імпровізаційні комедії та просто атмосферні жартівливі вечори з вівторка по неділю! Вулиця Січових Стрільців, 3. 14:00–23:30",
    "rating": 4.5,
    "image": BurhlyviOplisky
  },
  {
    "id": 14,
    "name": "Ресторан \"Valentino/Валентино\"",
    "description": "В меню Валентино представлені класичні італійські страви: хрусткі брускетти, закуски і салати, паста і хліб власної випічки, різотто, равіолі, страви з морепродуктами, соуси і тонка хрустка італійська піца, приготована в справжній італійській печі на дровах. Вечорами (Пт, Сб, Нд) Валентино зачаровує гостей особливо романтичним настроєм Львів, вул. Остапа Нижанківського 20. Час роботи:08:00-22:00", 
    "rating": 4,
    "image": Valentino
  },
  {
    "id": 15,
    "name": "Ресторан \"Mrs.Greenwich\"",
    "description": "Кафе-піцерія «Tarta cafe by Mrs.GREENWICH» міститься на вулиці Богдана Хмельницького в Личаківському районі Львова. У розпорядженні гостей просторий основний зал, де є місця за довгою барною стойкою, затишні обідні зони й дитячий ігровий куточок. Інтер'єр закладу оформлений у теплих пісочних і ванільних відтінках, а стіни кафе-піцерії прикрашає безліч дзеркал у рамах. Основу меню складають популярні страви італійської кухні. Вулиця Пекарська, 24. Графік роботи: 09:00–21:00",
    "rating": 4.5,
    "image": MrsGreenwich
  },
  {
    "id": 16,
    "name": "Ресторан \"Na Virmenskiy\"",
    "description": "Атмосферний ресторан, на вулиці Вірменській 4. Справжнє швейцарське фондю, велика винна карта, френч-тости,паста власного приготування.    ",
    "rating": 4,
    "image": NaVirmenskiy
  },
  {
    "id": 17,
    "name": "Ресторан \"Papi\"",
    "description": "Papí — вітальня подружжя Мамі і Папі, власниця - донька, а хто в ній працює — їх онуки. Тут завжди раді гостям. Вся комунікація формується на щирості і від лиця онуків. Вони хочуть поділитися цінностями, якими живуть, і принести в життя інших багато приємних деталей, показати їм свій маленький світ. Для них їжа — це справжнє мистецтво. Львів, вул. Валова 19. Робочий час: 09:00-22:00",
    "rating": 4.5,
    "image": Papi
  },
  {
    "id": 18,
    "name": "Ресторан \"МОРЕ РИБИ\"",
    "description": "Must visit місце від засновників закладів «Цукор». Улюблений з 2019 року львів’янами і усіма поціновувачами морської гастрономії ресторан, в якому розпочнеться ваш унагі ранок чи ранок з топовим стартером.Меню розділене на сніданки, супи та роли, салати та боули, і звісно, стартери. Приємний вайб цього ресторану спонукатиме вас затишно провести час у приємному товаристві, до того ж у заклад можна прийти зі своїми домашніми улюбленцями.ВУЛ. БРАТІВ РОГАТИНЦІВ, 43/12. НД-ЧТ 11:00 - 22:00 ПТ-СБ 11:00 - 23:00 ГОДИНИ РОБОТИ",
    "rating": 4,
    "image": MoreRyby
  },
  {
    "id": 19,
    "name": "Ресторан \"Epic Cheeseburger\"",
    "description": "Цей заклад став справжнім райом для шанувальників смачних бургерів та американської кухні. Інтер’єр ресторану виконаний в американському стилі – тут можна побачити яскраво-червоні дивани, вивіски у вигляді неонових написів та постери із зображенням апетитних гамбургерів. Все це створює атмосферу справжнього американського фаст-фуду. Меню Epic Cheeseburger Cafe може задовольнити навіть найвибагливіших гурманів. Тут представлені найрізноманітніші бургери з додатками.вулиця Галицька, 15. Часи роботи:11:00 - 22:00 ",
    "rating": 4.5,
    "image": EpicCheeseburger
  },
  {
    "id": 20,
    "name": "Ресторан \"Cukor Black\"",
    "description": "Ресторан Цукор Black спеціалізується на американській і європейській кухнях. Наші сніданки вже стали візитною карткою Львова, спеціальні сети на будь-який смак добре доповнюються ароматною кавою. А обід пройде в галасливій та веселій атмосфері вируючого міста. Салати, бургери, пасти і звичайно десерти є гордістю нашого ресторану. Для нас кожен гість, який заглянув на вогник - принц, і вся дружна команда буде носити його на руках. Ми знаходимося у центрі міста на вулиці Крива Липа 3, до дуже зручно дістатися і у нас є WiFі. Часи роботи: 08:00 - 22:00",
    "rating": 4,
    "image": CukorBlack
  },
  {
    "id": 21,
    "name": "Добрий пес",
    "description": "Справжній фаст-фуд заклад. Тут швидко зготують ваше замовлення, щоби ви могли далі бігти у справах. Окрім стандартних, тут є навіть хот-дог із печерицями та лимоном або веганський із тофу. Куштували колись такий?P.S. Не хвилюйтеся, ваш улюбленець після відвідин закладу залишиться цілим:) вул. Дорошенка, 45. 10:00-20:00, Нд – 11:00-19:00",
    "image": Gooddog
  },
  {
    "id": 22,
    "name": "Druzi cafe & bar",
    "description": "Міське кафе, де буде добре в компанії, парою, самостійно або з домашнім улюбленцем. Та що тут казати, якщо в самому закладі живе папуга! Тут вас чекають настільні ігри, літня тераса у внутрішньому дворику та європейська кухня.вул. Краківська, 5. Щодня, 9:00-21:00",
    "image": Druzi
  },
  {
    "id": 23,
    "name": "KREDENS CAFE",
    "description": "«Тваринки теж хочуть в кав’ярню» – пише на чашці KREDENS-у. Візьмемо їх із собою? Коли будете вибирати напій, цілком ймовірно, що потребуватимете поради баристи – настільки багато тут видів кави та кавових напоїв. А теплі відтінки залів лише підігріють ваш апетит до ароматного еліксиру.просп. Свободи, 37 | вул. Валова, 5 | вул. Під Дубом 7б (Forum Lviv)  | вул. Кульпарківська, 222а (Victoria Gardens). Щодня, просп. Свободи та Валова – 8:00-21:00, Victoria Gardens та Forum Lviv – 10:00-21:00",
    "image": Kredens
  },
  {
    "id": 24,
    "name": "Дзиґа",
    "description": "Культове місце для львівʼян, серце й душа мистецького Львова, центр єднання креативних людей. Хоча й значно менше, але й до сьогодні у Дзизі відбуваються культурні події, музичні вечори, за цією адресою знаходиться однойменний арт центр. вул. Вірменська, 35. 11:00-21:30, Пт-Нд – 11:00-22:00 ",
    "image": Dzuga
  },
  {
    "id": 25,
    "name": "Tsikava",
    "description": "Місце, про яке знають мало туристів. А відтак, тут затишно й по-домашньому. У цій кав’ярні вас пригостять сезонними стравами, сніданками, приготовленими з любов’ю, десертами для веганів і не тільки, теплими сінабонами. Це місце, де вам раді. вул. Кубійовича, 2 | вул. Левицького, 47 | вул. Хорватська, 15. Щодня, 9:00-21:00 ",
    "image": Tsikava
  },
  {
    "id": 26,
    "name": "Shoco",
    "description": "Десерти тут – справжні витвори мистецтва. Ви просто скуштуйте! Мигдалевий круасан, макарон з фісташкою та малиною, чашка запашного капучино. А сети із солодощами стануть чудовим подарунком. Команда Shoco знає свою справу! вул. Курбаса, 3 | вул. Сахарова, 44 | вул. Кульпарківська, 200а | вул. Стрийська, 45 | вул. Угорська, 12. Щодня, 8:00-20:00",
    "image": Shoco
  },
  {
    "id": 27,
    "name": "Marevo",
    "description": "Основна ідея ресторану – максимальна природність і щирість. Тут подають хліб власної випічки, крафтове пиво, страви з органічних продуктів, а вино підберуть просто під ваш настрій. До того ж, зараз, як ніколи, буде приємно відвідати Marevo, адже для вас приготували більше 5 видів какао. вул. Вірменська, 5. Щодня, 11:00-21:30",
    "image": Marevo
  },
  {
    "id": 28,
    "name": "Cheese Bakery",
    "description": "Де ж іще куштувати сирник, як не у Львові? У Cheese Bakery готують близько 10 різних чізкейків: від класичного до, наприклад, сирника з малиною та пармезаном. Коли будете тут, радимо скуштувати одну з найпопулярніших страв закладу – сирники з карамельним соусом. вул. Галицька, 1 | вул. Шевченка,120. Щодня, 9:00-21:00",
    "image": Bakery
  },
  {
    "id": 29,
    "name": "Dominicanes",
    "description": "Кав’ярня на площі під самим Домініканським собором. Час від часу тут можна послухати живу музику, відвідати літературний вечір чи взяти участь у майстер-класі. Якщо вам потрібна тепла затишна й лампова атмосфера – можете сміливо розглядати цю локацію. пл. Музейна, 1. Щодня, 10:00-21:00",
    "image": Dominicanes
  },
  {
    "id": 30,
    "name": "Фацет",
    "description": "У перекладі з львівської на українську «фацет» – парубок. Сама лише назва вже натякає, в якому стилі заклад нас чекає. Ретро інтер’єр та така ж атмосфера: вінтажні меблі, львівська кава, локальна кухня та галицькі наливки.вул. Вірменська, 28. Щодня, 11:00-23:00",
    "image": Facet
  },
  {
    "id": 31,
    "name": "#Hashtag Lounge Bar",
    "description": "#Hashtag Lounge Bar – це душевне місце із затишною атмосферою, безкоштовним плейстейшином, димними кальянами, чудовою кухнею і баром в самому центрі нашого міста.  Ми знаємо як вирішити вашу проблему, адже Hashtag Lounge bar - ідеальне місце, де зможете відпочити ви та ваш чотирилапий друг. Ми чекаємо на вас кожен день з 11:00 до 23:00 за адресою:місто Львів, вулиця Галицька 20 та вулиця Валова, 4",
    "image": Hashtag
  },
  {
    "id": 32,
    "name": "Паб Добрий Друг",
    "description": "Паб Добрий Друг — справді Добрий, адже радо прийме і вас і вашого улюбленця. Тому беріть свого чотирилапого друга і приходьте у гості. Чекаємо усіх поціновувачів пива та сидрів, у нас їх аж понад 27 видів, а закомпанують вам наші смачні страви ! вул. Лесі Українки 19, вул. Федорова 2 та вул. Федорова  1, вул. Січових Стрільців 3 (провулок Крива Липа). Щодня з 12:00 до 23:00",
    "image": Friend
  },
  {
    "id": 33,
    "name": "Hash Rest&Bar",
    "description": "Hash Rest&Bar – новий заклад у Львові від творців популярного Hashtag Lounge Bar. Тут на вас чекає широкий асортимент різноманітних страв і бару, ароматні димні кальяни, а також з DJ і party. Інтер’єр у закладі дійсно налаштовує на відпочинок, темне підвальне приміщення органічно контрастує зі світлими та зеленими вставками, що створює неймовірну атмосферу. Львів, Староєврейська, 5. Графік роботи 11:00 - 23:00",
    "image": Hash
  },
  {
    "id": 34,
    "name": "Moment",
    "description": "Moment - ваш ідеальний відпочинок! Завітайте до нас за ароматною кавою, фірмовими круасанами та коктейлями після 19:00. У нас пет-френдлі атмосфера, де ваші улюбленці так само вітаються, як і ви. Фурманська, 17. Графік: 08:00-23:00  ",
    "image": Moment
  },
  {
    "id": 35,
    "name": "Tutti",
    "description": "У самому серці Львова вас чекає Tutti - перше в місті вайб-кафе, яке відрізняється своєю італійською атмосферою та гостинністю до тварин. Tutti - це справжня італійська кухня з римськими піцами та пастами, приготованими в печі. Тут ви зможете насолодитися широким вибором страв та великим бокалом аперолю. Наша всесезонна тераса завжди пропонує справжню палітру смаків у будь-який сезон року. Tutti - це не лише ресторан, але й Pet-Friendly місце, де ваші пухнасті друзі можуть насолоджуватися чудовою атмосферою поруч з вами. провулок Крива Липа, 7. Графік: 12:00 - 23:00",
    "image": Tutti
  },
  {
    "id": 36,
    "name": "5-Te Pidzemellya",
    "description": "Якщо ви помітите чоловіка у темному каптурі на площі Ринок, не бійтеся – навпаки, будьте уважними. Можливо, вам випаде неймовірна можливість зануритися в таємничий світ П'ятого підземелля. Тут вас чекають кам'яні стіни, дерев'яні меблі, середньовічна атмосфера та смачна кухня. пл. Ринок, 5. Щодня,10:00-22:00",
    "image": Pidzemellya
  },
  {
    "id": 37,
    "name": "Королівська Пивоварня",
    "description": "Чи є можливість перекусити за фіксовану ціну? Так, у Королівській Пивоварні пропонують бізнес-ланчі. Чи є дитяче меню? Звичайно, ми маємо вибір для найменших гостей. Якщо ви відчуваєте голод після ранкового бігу, завітайте на сніданок. У нас є закуски, пиво, коктейлі, віскі та широкий вибір інших алкогольних напоїв. вул. Староєврейська, 9. 08:00-22:00, Пт-Нд – 08:00-23:00",
    "image": King
  },
];
  

const EstablishmentCard = ({ establishment }) => (
  <div className="relative mb-8 rounded-2xl p-6" style={{ backgroundColor: '#e89a6d' }}>
    <div className="flex">
      <img src={establishment.image} className="w-64 h-64 mr-8 rounded-md" style={{ width: '200px', height: '200px' }} />
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">{establishment.name}</h2>
        <p className="text-[#572b11]">{establishment.description}</p>
        <a href="/another-page" className="mt-auto">
          <img src={arrowImage} alt="Arrow" className="w-12 h-12 absolute bottom-4 right-4" style={{ filter: 'brightness(150%)' }} />
        </a>
      </div>
    </div>
  </div>
);
const PetFriendlyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-8">
        {establishments.map(establishment => (
          <EstablishmentCard key={establishment.id} establishment={establishment} />
        ))}
      </div>
    </div>
  );
};

export default PetFriendlyPage;