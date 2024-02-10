let noButtonClickCount = 0;
        const additionalWords = ['BAKIT AYAW MO', 'ANG DAMOT MO', 'SIGE NA PLEASE', 'HMP', 'DI MO KO LAB', 'BREAK NA TAYO SIGE', 'JOKE LANG PAYAG KA NA KASI', '*umiyak*', '*nagdabog*', '*nag breakdance*', ':(', 'huhuhuhu', 'muka kang hatdog', 'GRRRRRRRR', 'MAG YES KA NA KASI', 'balakajan'];
        let wordIndex = 0;

        function handleNoClick() {
            noButtonClickCount++;
            const noButton = document.getElementById('noButton');

            // Display the next word in order
            const currentWord = additionalWords[wordIndex];
            noButton.textContent = `${currentWord}`;

            // Increase the size of the YES button
            const yesButton = document.getElementById('yesButton');
            yesButton.style.fontSize = `${parseFloat(window.getComputedStyle(yesButton).fontSize) + 15}px`;
            yesButton.style.width = `${parseFloat(window.getComputedStyle(yesButton).width) + 40}px`;
            yesButton.style.height = `${parseFloat(window.getComputedStyle(yesButton).height) + 40}px`;

            // Increment the index for the next word
            wordIndex = (wordIndex + 1) % additionalWords.length;
        }

        function handleYesClick() {
            // Replace elements with a new GIF and message
            document.getElementById('container').innerHTML = `
                <img id="valentineGif" src="https://media1.tenor.com/m/5cqhpmNH8h4AAAAC/love-hearts.gif" alt="Valentine GIF">
                <br>
                <p id="message">Yey! Happy Valentine's Day!<br><br>I Love You! <br> Mwa</p>
            `;
        }