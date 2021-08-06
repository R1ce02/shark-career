<template>
  <div class="container pt-3">
    <h1 class="greytxt">{{ $t("solutions.heading") }}</h1>
    <div class="row">
      <div class="col-md-3 mb-3">
        <div class="list-group" id="list-tab" role="tablist">
          <a
            class="list-group-item list-group-item-action active"
            id="list-home-list"
            data-bs-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="list-home"
            >{{ $t("solutions.listItem1.heading") }}</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-profile-list"
            data-bs-toggle="list"
            href="#list-profile"
            role="tab"
            aria-controls="list-profile"
            >{{ $t("solutions.listItem2.heading") }}</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-messages-list"
            data-bs-toggle="list"
            href="#list-messages"
            role="tab"
            aria-controls="list-messages"
            >{{ $t("solutions.listItem3.heading") }}</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-settings-list"
            data-bs-toggle="list"
            href="#list-settings"
            role="tab"
            aria-controls="list-settings"
            >{{ $t("solutions.listItem4.heading") }}</a
          >
        </div>
      </div>
      <div class="col-md-9">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="list-home"
            role="tabpanel"
            aria-labelledby="list-home-list"
          >
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title ">{{ $t("solutions.listItem1.card1_heading") }}</h5>
                <p class="card-text">
                    <ul class="fa-ul">
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card1_1") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card1_2") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card1_3") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card1_4") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card1_5") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card1_6") }}</li>
                    </ul>
                </p>
              </div>
            </div>

            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">{{ $t("solutions.listItem1.card2_heading") }}</h5>
                <p class="card-text">
                    <ul class="fa-ul">
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card2_1") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card2_2") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card2_3") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card2_4") }}</li>
                    </ul>
                </p>
              </div>
            </div>

            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">{{ $t("solutions.listItem1.card3_heading") }}</h5>
                <p class="card-text">
                    <ul class="fa-ul">
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card3_1") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card3_2") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card3_3") }}</li>
                    </ul>
                </p>
              </div>
            </div>

            <div class="card" >
              <div class="card-body">
                <h5 class="title card-title">{{ $t("solutions.listItem1.card4_heading") }}</h5>
                <p class="card-text">
                    <ul class="fa-ul">
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card4_1") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card4_2") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem1.card4_3") }}</li>
                    </ul>
                </p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="list-profile"
            role="tabpanel"
            aria-labelledby="list-profile-list"
          >
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">{{ $t("solutions.listItem2.card1_heading") }}</h5>
                <p class="card-text">
                     {{ $t("solutions.listItem2.card1_1") }}
                </p>
              </div>
            </div>
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">{{ $t("solutions.listItem2.card2_heading") }}</h5>
                <p class="card-text">
                    {{ $t("solutions.listItem2.card2_1") }} 
                </p>
              </div>
            </div>

            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">{{ $t("solutions.listItem2.card3_heading") }}</h5>
                <p class="card-text">
                    {{ $t("solutions.listItem2.card3_1") }} </p>
              </div>
            </div>

             <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">{{ $t("solutions.listItem2.card4_heading") }}</h5>
                <p class="card-text">
                    {{ $t("solutions.listItem2.card4_1") }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="list-messages"
            role="tabpanel"
            aria-labelledby="list-messages-list"
          >
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">{{ $t("solutions.listItem3.card1_heading") }}</h5>
                <p class="card-text">
                     {{ $t("solutions.listItem3.card1_1") }}
                </p>
              </div>
            </div>
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">{{ $t("solutions.listItem3.card2_heading") }}</h5>
                <p class="card-text">
                    {{ $t("solutions.listItem3.card2_1") }}
                </p>
              </div>
            </div>
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">{{ $t("solutions.listItem3.card3_heading") }}</h5>
                <p class="card-text">
                    {{ $t("solutions.listItem3.card3_1") }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="list-settings"
            role="tabpanel"
            aria-labelledby="list-settings-list"
          >
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">{{ $t("solutions.listItem4.card1_heading") }}</h5>
                <p class="card-text">
                    {{ $t("solutions.listItem4.card1_1") }}<br>
                    <br>
                    {{ $t("solutions.listItem4.card1_2") }}
                    <ul class="fa-ul">
                        <li class=""><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem4.card1_li1") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem4.card1_li2") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem4.card1_li3") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem4.card1_li4") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem4.card1_li5") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem4.card1_li6") }}</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>{{ $t("solutions.listItem4.card1_li7") }}</li>
                    </ul>      
                    {{ $t("solutions.listItem4.card1_3") }}<br>
                    <br>
                    {{ $t("solutions.listItem4.card1_4") }} 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>