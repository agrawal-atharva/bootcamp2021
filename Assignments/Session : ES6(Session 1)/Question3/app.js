const song = {
	name: 'Dying to live',
	artist: 'Tupac',
	featuring: 'Biggie Smalls',
};

const final = `
    <div class="song">
        <p>
             ${song.name} - ${song.artist}
            (Featuring ${song.featuring}) 
        </p>
    </div>
  `;
document.getElementById('temp').innerHTML = final;
