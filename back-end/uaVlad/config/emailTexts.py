email_texts = {
    "en": {
        "thank_you_message": "Ua-Vlad Thank you for your message",
        "thank_you_comment": "Ua-Vlad Thank you for your comment"
    },
    "cs": {
        "thank_you_message": "Ua-Vlad Děkujeme za vaši zprávu",
        "thank_you_comment": "Ua-Vlad Děkujeme za váš komentář"
    },
    "uk": {
        "thank_you_message": "Ua-Vlad Дякуємо за ваше повідомлення",
        "thank_you_comment": "Ua-Vlad Дякуємо за ваш коментар"
    },
    "ru": {
        "thank_you_message": "Ua-Vlad Спасибо за ваше сообщение",
        "thank_you_comment": "Ua-Vlad Спасибо за ваш комментарий"
    }
}

def get_email_text(language, text_type):
    return email_texts.get(language, {}).get(text_type, "")

emailBodyComment = {
    "ru": {
        "subject": "Ua-Vlad: Спасибо за ваш отзыв!",
        "greeting": "Здравствуйте, {name}!",
        "thank_you": "От всей команды Ua-Vlad огромная благодарность за ваш отзыв! 🧡 Ваше мнение помогает нам делать нашу работу лучше и вдохновляет на новые достижения.",
        "stay_connected": "Как насчёт оставаться на связи? У нас впереди много интересного — регулярные обновления на сайте с нашими свежими работами и захватывающие новости о расширении команды!",
        "notification": "Мы будем держать вас в курсе событий! 🌟",
        "final_note": "Не волнуйтесь, вы всегда сможете изменить своё решение и отписаться в любой момент. Мы будем рады оставаться на связи и делиться с вами нашим прогрессом!",
        "signature": "С уважением,<br>Ваша команда Ua-Vlad<br><em>Пишите, если у вас возникли вопросы или просто хочется узнать больше. Мы всегда на связи!</em>"
    },
    "en": {
        "subject": "Ua-Vlad: Thank you for your feedback!",
        "greeting": "Hello, {name}!",
        "thank_you": "On behalf of the entire Ua-Vlad team, we sincerely thank you for your feedback! 🧡 Your opinion helps us improve our work and inspires us to achieve more.",
        "stay_connected": "How about staying in touch? We have a lot of exciting things ahead — regular updates on our website with fresh work and exciting news about our expanding team!",
        "notification": "We will keep you updated on events! 🌟",
        "final_note": "Don&rsquo;t worry, you can always change your mind and unsubscribe at any time. We&rsquo;ll be happy to stay in touch and share our progress with you!",
        "signature": "Best regards,<br>Your Ua-Vlad Team<br><em>Feel free to reach out if you have any questions or just want to know more. We are always here!</em>"
    },
    "cs": {
        "subject": "Ua-Vlad: Děkujeme za vaši zpětnou vazbu!",
        "greeting": "Dobrý den, {name}!",
        "thank_you": "Za celý tým Ua-Vlad vám srdečně děkujeme za vaši zpětnou vazbu! 🧡 Váš názor nám pomáhá zlepšovat naši práci a inspiruje nás k dalšímu úsilí.",
        "stay_connected": "Co říkáte na to, zůstat v kontaktu? Čeká nás spousta vzrušujících věcí — pravidelné aktualizace na našem webu s novými pracemi a vzrušující novinky o našem rozšiřujícím se týmu!",
        "notification": "Budeme vás informovat o událostech! 🌟",
        "final_note": "Nebojte se, kdykoliv můžete změnit své rozhodnutí a odhlásit se. Budeme rádi, když s vámi zůstaneme v kontaktu a budeme s vámi sdílet náš pokrok!",
        "signature": "S pozdravem,<br>Váš tým Ua-Vlad<br><em>Neváhejte nás kontaktovat, pokud máte nějaké otázky nebo se jen chcete dozvědět více. Vždy jsme tu pro vás!</em>"
    },
    "uk": {
        "subject": "Ua-Vlad: Дякуємо за ваш відгук!",
        "greeting": "Доброго дня, {name}!",
        "thank_you": "Від імені всієї команди Ua-Vlad щиро дякуємо за ваш відгук! 🧡 Ваша думка допомагає нам покращувати нашу роботу та надихає на нові досягнення.",
        "stay_connected": "Як щодо того, щоб залишатися на зв'язку? У нас попереду багато цікавого — регулярні оновлення на сайті з нашими свіжими роботами та захоплюючі новини про розширення команди!",
        "notification": "Ми будемо тримати вас у курсі подій! 🌟",
        "final_note": "Не хвилюйтеся, ви завжди зможете змінити своє рішення &#1110; відписатися в будь-який момент. Ми будемо раді залишатися на зв'язку та ділитися з вами нашим прогресом!",
        "signature": "З повагою,<br>Ваша команда Ua-Vlad<br><em>Пишіть, якщо у вас виникнуть питання або просто хочете дізнатися більше. Ми завжди на зв'язку!</em>"
    }
}

emailBodyResponse = {
    "ru": {
        "subject": "Ua-Vlad: Спасибо за ваше сообщение!",
        "greeting": "Здравствуйте, {name}!",
        "thank_you": "Спасибо, что проявили интерес к нашей компании!",
        "notification": "Мы внимательно рассмотрим ваше сообщение и свяжемся с вами в ближайшее время.",
        "final_note": "Если у вас есть дополнительные вопросы, не стесняйтесь обращаться к нам.",
        "signature": "С уважением,<br>Ваша команда Ua-Vlad<br><em>Мы всегда готовы помочь!</em>"
    },
    "en": {
        "subject": "Ua-Vlad: Thank you for your message!",
        "greeting": "Hello, {name}!",
        "thank_you": "Thank you for your interest in our company!",
        "notification": "We will carefully review your message and get back to you as soon as possible.",
        "final_note": "If you have any further questions, feel free to reach out to us.",
        "signature": "Best regards,<br>Your Ua-Vlad Team<br><em>We are always here to help!</em>"
    },
    "cs": {
        "subject": "Ua-Vlad: Děkujeme za vaši zprávu!",
        "greeting": "Dobrý den, {name}!",
        "thank_you": "Děkujeme, že máte zájem o naši společnost!",
        "notification": "Vaši zprávu pečlivě prostudujeme a co nejdříve se s vámi spojíme.",
        "final_note": "Pokud máte další dotazy, neváhejte se na nás obrátit.",
        "signature": "S pozdravem,<br>Váš tým Ua-Vlad<br><em>Jsme tu vždy pro vás!</em>"
    },
    "uk": {
        "subject": "Ua-Vlad: Дякуємо за ваше повідомлення!",
        "greeting": "Доброго дня, {name}!",
        "thank_you": "Дякуємо за ваш інтерес до нашої компанії!",
        "notification": "Ми уважно розглянемо ваше повідомлення &#1110; зв'яжемося з вами найближчим часом.",
        "final_note": "Якщо у вас є додаткові запитання, не соромтеся звертатися до нас.",
        "signature": "З повагою,<br>Ваша команда Ua-Vlad<br><em>Ми завжди готові допомогти!</em>"
    }
}

