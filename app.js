document.addEventListener('DOMContentLoaded', () => {
    const loomianFrameTemplate = document.getElementById("loomian-frame-template");
    const partyFrames = document.querySelectorAll('.party-frame');

    const items = [
        { title: "loomian 1", body: "body1" },
        { title: "loomian 2", body: "body2" },
        { title: "loomian 3", body: "body3" },
        { title: "loomian 4", body: "body4" },
        { title: "loomian 5", body: "body5" },
        { title: "loomian 6", body: "body6" }
    ];

    partyFrames.forEach((partyFrame) => {
        items.forEach(({ title, body }) => {
        const clone = loomianFrameTemplate.content.cloneNode(true);
        const header = clone.querySelector('.header');
        const bodyDiv = clone.querySelector('.body');
        const frame = clone.querySelector('.loomian-frame');

        clone.querySelector('h3').textContent = title;
        clone.querySelector('p').textContent = body;

        header.addEventListener('click', () => {
            frame.classList.toggle('open');
        });

        partyFrame.appendChild(clone);
        });
    });
});