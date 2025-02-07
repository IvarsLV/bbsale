<template>
  <div class="main-container">
    <!-- Title -->
    <div class="main-title" style="justify-content: center;">
      <h2>{{ $t("contacts.welcome_title") }}</h2>
    </div>
    <div class="main-card-1">
    <div class="card">
        <div class="mapswrapper">
          <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1146.7412193055166!2d26.550207090114725!3d55.871137034193076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c295af8067e145%3A0x8205561c1bc7af55!2sSiguldas%20Iela%206D%2C%20Daugavpils%2C%20LV-5404!5e0!3m2!1sru!2slv!4v1738604677280!5m2!1sru!2slv&z=16" 
    allowfullscreen 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
    </div>
    </div>
    <!-- Two Cards Row -->
    <div class="main-card-2">
      <div class="card">
        <div class="card-inner">
          <h3>{{ $t("contacts.rekviziti_title") }} </h3>
          <span class="material-symbols-outlined">stacked_inbox</span>
        </div>
        <table style="width: 100%; border-collapse: collapse; text-align: left; margin-top: 20px;">
    <thead>
        <tr>
            <th colspan="2" style="padding: 10px; font-size: 18px; border: 1px solid #ddd;">
                SIA "Betonblock"
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><b>{{ $t("details.address") }}</b></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Siguldas iela 6D, Daugavpils, LV-5404</td>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><b>{{ $t("details.regnr") }}</b></td>
            <td style="padding: 8px; border: 1px solid #ddd;">41503066912</td>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><b>{{ $t("details.vatnr") }}</b></td>
            <td style="padding: 8px; border: 1px solid #ddd;">LV41503066912</td>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><b>{{ $t("details.bank") }}</b></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Revolut Bank UAB</td>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><b>{{ $t("details.swift") }}</b></td>
            <td style="padding: 8px; border: 1px solid #ddd;">REVOLT21</td>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><b>{{ $t("details.bank_acc") }}</b></td>
            <td style="padding: 8px; border: 1px solid #ddd;">LT60 3250 0087 4543 7412</td>
        </tr>
    </tbody>
</table>

      </div>
      <div class="card">
        <div class="card-inner">
          <h3>{{ $t("contacts.contacts_title") }} </h3>
          <span class="material-symbols-outlined">contact_mail</span>
        </div>
        <p v-html="$t('contacts.contacts')"></p>
        <div class="contact-buttons"><br><br><br>
                    <form action="https://wa.me/37127903053" target="_blank" style="display: inline;">
                        <button id="sendProposalButtonW">
                          <span class="material-symbols-outlined">mail</span>
                          WhatsApp
                        </button>
                      </form>
                    
                    <form action="mailto:fin@ipx.lv" style="display: inline;">
                        <button id="sendProposalButton">
                          <span class="material-symbols-outlined">mail</span>
                          Email
                        </button>
                      </form>
                </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/style.css";
</style>