try {
    var mysql = require('mysql');
}
catch (err) {

    alert("Ошибка! Установите Node.js, чтоб информация для сайта загружалась через БД!");
    var nameOsnova = ['Кигуруми', 'Тапочки', 'Движущиеся ушки ', 'Альпаки'];
    var imgtext = 'img/';
    var ImgOsnova = [
        imgtext + '1.jpg'
        , imgtext + '3.jpg'
        , imgtext + '5.jpg'
        , imgtext + '7.jpg'
    ];
    var ImgOsnova1 = [
        imgtext + '2.jpg'
        , imgtext + '4.jpg'
        , imgtext + '6.jpg'
        , imgtext + '8.jpg'
    ];
    var txtOsnova = [
        'Панда'
        , 'Покемон'
        , 'Покемон'
        , 'Белый'
    ];
    var txtOsnova1 = [
        'Единорог'
        , 'Динозавры'
        , 'Единорог'
        , 'Разноцветный'
    ];
    var txt1 = 'Цена: ';
    var txt2 = ' грн';
    var wOsnova = [
        txt1 + '599' + txt2
        , txt1 + '399' + txt2
        , txt1 + '249' + txt2
        , txt1 + '499' + txt2
    ];
    var wOsnova1 = [
        txt1 + '599' + txt2
        , txt1 + '399' + txt2
        , txt1 + '249' + txt2
        , txt1 + '499' + txt2
    ];
    var TextOsnova = [
        'Кигуруми Искорка – это яркий и насыщенный, как закатное солнце, костюм, который поднимает настроение, как любимый праздник, ощущается на теле, как самые нежные объятия. И это ещё не весь перечень приятностей, что вы ощутите, надев эту невероятную пижаму Радужного Единорога!\n' +
        '\n' +
        'Пижамы кигуруми - это яркие оригинальные комбинезоны для крутых фотосессий, весёлых прогулок с друзьями, активного отдыха или просто домашних посиделок.\n' +
        '\n' +
        'Благодаря свободной форме пижамы кигуруми подходят под любую фигуру. При выборе кигуруми обхват груди и бедер практически не имеет значения.\n' +
        'Единственный важный критерий при выборе размера - это рост. Опираясь на ваш рост мы поможем вам подобрать размер любой модели.\n' +
        'Рост фотомодели на фотографиях 158 см. Размер на ней M.\n' +
        'Для пошива используется гиппоалергенная мягкая ворсистая ткань WellSoft. Также она известна как "Корал флис". Внутри с небольшим начёсом.\n' +
        'Пуговицы спереди позволяют легко одевать и снимать пижаму\n' +
        'Сзади на попе молния для удобства.\n' +
        'По бокам есть карманы средней глубины.\n' +
        'Манжеты на рукавах и штанинах свободно растягиваются, не сковывает движения.\n' +
        'Пошив производится на фабрике в Китае. Мы имеем дело только с сертифицированным производителем.\n' +
        'Все кигуруми проходят тщательную проверку перед отправкой. У нас вы никогда не встретите торчащих ниток или других дефектов. А если вдруг такое и случится мы гарантируем обмен или возврат в течение 14 дней.'

        , 'Тапки лапки - это дополнения к пижаме кигуруми. Они прочные, мягкие, теплые, легкие с прорезиненной подошвой,  комфортны в носке.\n' +
        '\n' +
        'Эта обувь для всей семьи,  а подобрать размер не составит никакого труда, так как для этого  необходимо лишь знать размер обуви   или длину стопы человека который будет её носить.\n' +
        '\n' +
        'Эти забавные домашние тапочки имеют необычный дизайн в виде милого единорога. Тапочки Единороги будут не только прочно держаться на ногах, сохраняя тепло, но также очаруют любого, кто придет к Вам в гости. Подошва тапочек сделана из специального нескользящего материла.Тапочки Единороги универсального размера, подходящие для размера ноги 36-42. Веселые и необычные тапочки не оставят равнодушными детей и взрослых.\n' +
        'Тапочки Единороги:\n' +
        'Необычный дизайн в виде милого единорога;\n' +
        'Подошва тапочек сделана из специального нескользящего материла;\n' +
        'Универсальный размер, подходящий для 36-42 размера ноги.'
        , 'Меховая детская шапка оформлена в виде мордочки зайца с ушами и длинными лапами.\n' +
        '\n' +
        'Шапочка с заячьими ушками украсит любую вечеринку и развеселит как ребенка, так и взрослого.\n' +
        '\n' +
        'Шапка с двигающимися ушами зайца сделана из мягкого искусственного меха.\n' +
        '\n' +
        'Веселая улыбающаяся мордашка и движущиеся светящиеся ушки придадут праздничное настроение. Ушки двигаются при нажатии на завязки шапки, в которые вставлен специальный вакуумный механизм. Шапка с подвижными ушками подойдет, как ребенку, так взрослому.'
        ,
        'Красивая и невероятно мягкая игрушка Альпака порадует любого малыша. Зверька приятно гладить и держать в руках, общение с ним дарит тепло и позитивные эмоции.\n' +
        '\n' +
        'Игрушка изготовлена из безопасного и качественного текстиля - искусственного меха с хорошими износостойкими свойствами. Изделие наполнено нетоксичным полиэфирным волокном и держит форму даже при активной игре.\n' +
        '\n' +
        'Размер альпаки составляет 29 см, что позволяет брать её с собой в гости или на прогулку. Игра с персонажем способствует развитию мелкой моторики, тактильных ощущений, воображения и умения играть.'];
}