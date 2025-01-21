const groups = {
    BLACKPINK: [
        { name: 'Jennie', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4gqAF0OxH3207WbdSwidYpQw1Okd44frFw&s' },
        { name: 'Lisa', img: 'https://images.thevoicemag.ru/upload/img_cache/aa8/aa8fd3433c1da220fd521f81aad12fda_cropped_666x666.webp' },
        { name: 'Jisoo', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHw-61F_jSDAhj0aGvAyZuglLwIDGMHtJCGg&s' },
        { name: 'Rosé', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXF20jBy5qZhuoK8RTx7jUMzog6iARsMywQ&s' }
    ],
    BTS: [
        { name: 'RM', img: 'https://i.mydramalist.com/qrE1B_5c.jpg' },
        { name: 'Jin', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KPdw3qiYxs8xcVdq7ro0MRUsrV4bBkHSHg&s' },
        { name: 'Suga', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGFRMlmdUAtuEpCODPl7Sarv0HfvZc7w26g&s' },
        { name: 'J-Hope', img: 'https://www.rappler.com/tachyon/2022/08/Screen-Shot-2022-08-01-at-6.46.06-PM.png' },
        { name: 'Jimin', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveVdkIm0k-iMHOfdE27dxEU6ddjsxI5ilUQ&s' },
        { name: 'V', img: 'https://0.soompi.io/wp-content/uploads/2021/12/21181323/V-2.jpg' },
        { name: 'Jungkook', img: 'https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960' }
    ]
};

const input = prompt('blackpink yoki bts yozing').toUpperCase();
const membersDiv = document.getElementById('members');
membersDiv.innerHTML = '';

if (groups[input]) {
    groups[input].forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member';

        const img = document.createElement('img');
        img.src = member.img;
        img.alt = member.name;

        const name = document.createElement('p');
        name.textContent = member.name;

            memberDiv.appendChild(img);
            memberDiv.appendChild(name);
            membersDiv.appendChild(memberDiv);
        });
    } else {
        membersDiv.innerHTML = '<p>Grupa topilmadi.Boshqatan yozing😒!</p>';
    }