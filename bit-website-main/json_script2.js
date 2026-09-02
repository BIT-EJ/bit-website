document.addEventListener("DOMContentLoaded", () => {
    const jsonPath = "../data/business.json";
    fetch(jsonPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar o JSON: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const numMembersRocket = document.getElementById("num-members-rocket");
            const numMembersText = document.getElementById("num-members-text");
            if (numMembersRocket) numMembersRocket.textContent = data.num_members;
            if (numMembersText) numMembersText.textContent = data.num_members;

            const ctaWhatsapp = document.getElementById("cta-whatsapp");
            const footerWhatsapp = document.getElementById("footer-whatsapp");
            const whatsappUrl = `https://wa.me/${data.whatsapp}`;
            if (ctaWhatsapp) ctaWhatsapp.href = whatsappUrl;
            if (footerWhatsapp) footerWhatsapp.href = whatsappUrl;

            const footerPhone = document.getElementById("footer-phone");
            const footerPhoneText = document.getElementById("footer-phone-text");
            if (footerPhone) footerPhone.href = `tel:${data.phone}`;
            if (footerPhoneText) footerPhoneText.textContent = `${data.phone_text}`;
        })
        .catch(error => {
            console.error("Não foi possível carregar os dados da empresa:", error);
        });
});