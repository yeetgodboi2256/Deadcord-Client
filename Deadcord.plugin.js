//META{"name":"Deadcord"}*//

const config = {
  ACCESS_URL: "http://localhost:30603",
};

const main_html = `
<div class=full-wrap id=deadcord-menu><style>@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap);#deadcord-menu{font-family:Quicksand,sans-serif;position:absolute;top:50%;left:50%;max-width:450px;width:100%;color:#f7f7f7;border-radius:8px;transform:translate(-50%,-50%);box-shadow:10px 10px 15px rgba(0,0,0,.06)}#deadcord-menu .content{display:flex;padding:30px 30px 40px 30px;flex-direction:column;justify-content:center}#deadcord-menu-header{font-size:23px;font-weight:500;padding:17px 15px}#deadcord-menu-header.active{cursor:move;user-select:none}.full-wrap{display:inline-block;padding:3px;position:relative;background:linear-gradient(90deg,#9a34ff,#ce42f5,#ff34c2);background-position:0 100%}.controls{background-color:#0e0d13;border-radius:6px}.tab{overflow:hidden;height:60px}.tab button{float:left;width:20%;height:40px;border:none;outline:0;cursor:pointer;transition:.3s;font-size:17px;background-color:#202025;color:#f7f7f7}.tab button.active{background-color:#0e0d13;color:#fff}.tabcontent{display:none;padding:6px 12px;border-top:none;background-color:transparent;color:#ddd;height:450px;overflow:hidden;overflow-y:scroll}.deadcord-button{color:#fff;background-color:#9a34ff;padding:8px;position:relative;border:none;border-radius:4px;cursor:pointer}.deadcord-button:hover{background-color:#8637d4}.deadcord-input{box-sizing:border-box;width:100%;font-size:14px;padding:8px;margin-bottom:8px;border:solid 2px #202025;border-radius:4px;color:#fff;background-color:#202025}.deadcord-input::placeholder{color:#949494;opacity:1}.deadcord-input:focus{border:2px solid #9b35ff}.toggle-notice{text-align:center;padding:10px}.button-pod{padding:5px}.button-spacer{margin-right:8px}.switch{display:inline-block;position:relative;margin:0 0 10px;font-size:16px;line-height:24px}.switch__input{position:absolute;top:0;left:0;width:36px;height:20px;opacity:0;z-index:0}.switch__label{display:block;padding:0 0 0 44px;cursor:pointer;color:#fff}.switch__label:before{content:"";position:absolute;top:5px;left:0;width:36px;height:14px;background-color:rgb(255 0 153 / 26%);border-radius:14px;z-index:1;transition:background-color .28s cubic-bezier(.4,0,.2,1)}.switch__label:after{content:"";position:absolute;top:2px;left:0;width:20px;height:20px;background-color:#e631a2;border-radius:14px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);z-index:2;transition:all .28s cubic-bezier(.4,0,.2,1);transition-property:left,background-color}.switch__input:checked+.switch__label:before{background-color:rgb(103 75 162 / 50%)}.switch__input:checked+.switch__label:after{left:16px;background-color:#a738fc}#spam_modes{width:100%;padding:8px;color:#949494;font-size:14px;background-color:#202025;-webkit-appearance:none;border:solid #202025 2px;border-radius:4px;margin-bottom:8px}#spam_modes option{background-color:#202025}#spam_modes:focus{border:2px solid #9a34ff}.section-title{color:#fff;font-weight:700;font-size:24px}input[type=range]{-webkit-appearance:none;margin:10px 0;width:100%}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:12.8px;cursor:pointer;background:#202025;border:0 solid #313344}input[type=range]::-webkit-slider-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:20px;width:39px;border-radius:4px;background:#9a34ff;cursor:pointer;-webkit-appearance:none;margin-top:-3.6px}input[type=range]:focus::-webkit-slider-runnable-track{background:#202025}input[type=range]::-moz-range-track{width:100%;height:12.8px;cursor:pointer;animate:.2s;background:#ac51b5}input[type=range]::-moz-range-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:20px;width:39px;border-radius:7px;background:#65001c;cursor:pointer}input[type=range]::-ms-track{width:100%;height:12.8px;cursor:pointer;animate:.2s;background:0 0;border-color:transparent;border-width:39px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#313344}input[type=range]::-ms-fill-upper{background:#313344}input[type=range]::-ms-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:20px;width:39px;background:#65001c;cursor:pointer}input[type=range]:focus::-ms-fill-lower{background:#ac51b5}input[type=range]:focus::-ms-fill-upper{background:#ac51b5}.closable-badge{border-radius:8px;border:2px solid #9a34ff;padding:8px;background-color:#202025;cursor:pointer}.closable-badge:hover{border:2px solid #f0356d}.content-container{height:500px;overflow-x:hidden;overflow-y:scroll}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-thumb{background:#202025;border-radius:8px}::-webkit-scrollbar-track{border-radius:0;margin-block:0}.lower{margin-top:8px}.heading{font-weight:700;font-size:22px;margin-bottom:15px}.seperator{margin-bottom:35px}.button-seperator{margin-left:8px}</style><div class=controls><div id=deadcord-menu-header>💀 Deadcord Menu</div><div class=tab><button class="tablinks active"id=general-tab>General</button> <button class=tablinks id=spam-tab>Spam</button> <button class=tablinks id=guild-tab>Guild</button> <button class=tablinks id=utility-tab>Utility</button> <button class=tablinks id=other-tab>Other</button></div><div class=tabcontent id=General style=display:block><div class=heading>General Controls</div><div class=button-pod><button class="deadcord-button button-spacer"id=stop-all style=background-color:#f0356d>Stop all</button><span>Stop all looped actions (eg. spam, onliner).</span></div><div class=button-pod><button class="deadcord-button button-spacer"id=ping-all-tokens>Ping Tokens</button><span>Ping all tokens loaded.</span></div><div class=button-pod><button class="deadcord-button button-spacer"id=disguise-tokens>Change Avatar</button><span>Randomly change token avatars.</span></div><div class=button-pod><button class="deadcord-button button-spacer"id=check-for-updates>Check for Updates</button><span>Check for any client updates.</span></div></div><div class=tabcontent id=Spam style=display:none><div class=heading>Message Spam</div><div style=display:flex;margin-bottom:8px><div class=switch style=flex-grow:1><input id=tts-text class=switch__input type=checkbox><label class=switch__label for=tts-text>TTS Messages</label></div><button class=deadcord-button id=start-typing-spam style=background-color:#d84ee4>Start Typing Spam</button></div><select id=spam_modes name=spam_modes><option value=1>Regular Messages<option value=2>@everyone Ping<option value=3>Mass User Ping<option value=4>Blank Message Spam<option value=5>Laggy Messages</select> <textarea class=deadcord-input id=messages placeholder="Messages to spam. Seperate by new line."style=resize:none;height:250px></textarea><input id=spam-delay-seconds type=range max=100 min=0 step=1 value=0><div class=lower><button class=deadcord-button id=start-spam>Start Spam</button><button class="deadcord-button button-seperator"id=import-channels>Import Channels</button></div><div class=seperator></div><div id=channels-imported></div></div><div class=tabcontent id=Guild style=display:none><div class=heading>Join & Leave Guild</div><p>Join or leave a guild, this feature depends on token quality and possible captcha.</p><input id=guild-invite class=deadcord-input placeholder="Guild Invite"><input id=join-delay-seconds type=range max=100 min=0 step=1 value=0><div class=lower><button class=deadcord-button id=join-tokens>Join Guild</button><button class="deadcord-button button-seperator"id=leave-tokens style=background-color:#f0356d>Leave Guild</button></div><div class=seperator></div><div class=heading>Guild Nickname</div><p>Change all bot nicknames that are in a guild.</p><input id=nickname class=deadcord-input placeholder=Nickname><div class=lower><button class=deadcord-button id=nick-tokens>Nick Tokens</button></div><div class=seperator></div><div class=heading>Speak & Annouce</div><p>Sends one message in every open channel in a guild.</p><input id=speak-message class=deadcord-input placeholder="Speak Message"><div class=lower><button class=deadcord-button id=speak-tokens>Send Message</button></div><div class=seperator></div><div class=heading>Thread Spam</div><p>Mass-creates threads for each bot you have.</p><input id=thread-channel-id class=deadcord-input placeholder="Channel ID"><input id=thread-use-name class=deadcord-input placeholder="Thread Name"><div class=lower><button class=deadcord-button id=start-thread-spam>Start Thread Spam</button></div><div class=seperator></div><div class=heading>Mass Invite Creator</div><p>One thousand invites will be created for each bot, you can stop this process with the Stop All button.</p><input id=invites-channel-id class=deadcord-input placeholder="Channel ID"><div class=lower><button class=deadcord-button id=mass-create-invites>Start Mass Creation</button></div><div class=seperator></div></div><div class=tabcontent id=Utility style=display:none><div class=heading>React to message</div><p>Have each bot react on a message.</p><input id=react-channel-id class=deadcord-input placeholder="Channel ID"><input id=react-message-id class=deadcord-input placeholder="Message ID"><input id=react-emoji class=deadcord-input placeholder="Emoji Name"><div class=lower><button class=deadcord-button id=react-tokens>React Tokens</button></div><div class=seperator></div><div class=heading>Friend Requests</div><p>Have all bots send a friend request to another user.</p><input id=friend-user-id class=deadcord-input placeholder="User ID"><div class=lower><button class=deadcord-button id=send-friend-requests>Send Friend Requests</button><button class="deadcord-button button-seperator"id=remove-friend-requests style=background-color:#f0356d>Remove Friend Requests</button></div><div class=lower></div></div><div class=tabcontent id=Other style=display:none><div class=heading>Webhook Tools</div><p>Spam or delete a singular webhook. Must have the webhook beforehand.</p><input id=webhook-url class=deadcord-input placeholder="Webhook URL"><input id=webhook-username class=deadcord-input placeholder="Webhook Username"><textarea class=deadcord-input id=webhook-spam-message placeholder="Message to send to the webhook."style=height:160px;resize:none></textarea><div class=lower><button class=deadcord-button id=start-webhook-spam style=margin-right:8px>Spam Webhook</button><button class=deadcord-button id=delete-webhook style=background-color:#f0356d>Delete Webhook</button></div></div><div class=toggle-notice>Toggle this menu with Ctrl + ;</div></div></div>
`;

class Deadcord {
  getName() {
    return "Deadcord Client";
  }
  getDescription() {
    return "A BetterDiscord plugin to interact with the Deadcord engine.";
  }
  getVersion() {
    return "1.7";
  }
  getAuthor() {
    return "CalamityDev";
  }

  start() {
    const client_version = this.getVersion();
    var imported_channels = {};
    var container = document.querySelector("bd-body");
    console.log(
      "%cDeadcord v" + this.getVersion(),
      "color: #9a34ff; font-size: 60px; font-weight: bold; background: #222433; padding: 10px;"
    );
    console.log(
      "%cThe Deadcord BD plugin has been loaded. Make sure the Deadcord engine is running, otherwise, the plugin will not work.",
      "color: #fff; font-size: 24px; background: #222433; padding: 10px;"
    );
    console.log(
      "%cWe are not responsible for how you use this software! Use at your own risk!",
      "color: red; font-size: 16px; background: black; padding:10px;"
    );

    inject_ui();

    function inject_ui() {
      container.insertAdjacentHTML("afterend", main_html);
      dragElement(document.getElementById("deadcord-menu"));

      document.getElementById("general-tab").addEventListener(
        "click",
        function (e) {
          open_tab(e, "General");
        },
        false
      );

      document.getElementById("spam-tab").addEventListener(
        "click",
        function (e) {
          open_tab(e, "Spam");
        },
        false
      );

      document.getElementById("guild-tab").addEventListener(
        "click",
        function (e) {
          open_tab(e, "Guild");
        },
        false
      );

      document.getElementById("utility-tab").addEventListener(
        "click",
        function (e) {
          open_tab(e, "Utility");
        },
        false
      );

      document.getElementById("other-tab").addEventListener(
        "click",
        function (e) {
          open_tab(e, "Other");
        },
        false
      );

      document
        .getElementById("ping-all-tokens")
        .addEventListener("click", ping_tokens, false);
      document
        .getElementById("join-tokens")
        .addEventListener("click", join_tokens, false);
      document
        .getElementById("leave-tokens")
        .addEventListener("click", leave_tokens, false);
      document
        .getElementById("nick-tokens")
        .addEventListener("click", nick_tokens, false);
      document
        .getElementById("disguise-tokens")
        .addEventListener("click", disguise_tokens, false);
      document
        .getElementById("react-tokens")
        .addEventListener("click", react_tokens, false);
      document
        .getElementById("send-friend-requests")
        .addEventListener("click", send_friend_requests, false);
      document
        .getElementById("remove-friend-requests")
        .addEventListener("click", remove_friend_requests, false);
      document
        .getElementById("start-spam")
        .addEventListener("click", start_spam, false);
      document
        .getElementById("import-channels")
        .addEventListener("click", import_channels, false);
      document
        .getElementById("speak-tokens")
        .addEventListener("click", speak_tokens, false);
      document
        .getElementById("start-typing-spam")
        .addEventListener("click", start_typing_spam, false);
      document
        .getElementById("start-webhook-spam")
        .addEventListener("click", start_webhook_spam, false);
      document
        .getElementById("delete-webhook")
        .addEventListener("click", delete_webhook, false);
      document
        .getElementById("start-thread-spam")
        .addEventListener("click", start_thread_spam, false);
      document
        .getElementById("mass-create-invites")
        .addEventListener("click", mass_create_invites, false);
      document
        .getElementById("stop-all")
        .addEventListener("click", stop_all, false);
      document
        .getElementById("check-for-updates")
        .addEventListener("click", check_for_updates, false);

      var join_delay_slider = document.getElementById("join-delay-seconds");
      join_delay_slider.oninput = function () {
        var output = document.getElementById("join-tokens");
        output.innerText =
          "Join Guild with: " + join_delay_slider.value + " second delay";
      };

      var spam_delay_slider = document.getElementById("spam-delay-seconds");
      spam_delay_slider.oninput = function () {
        var output = document.getElementById("start-spam");
        output.innerText =
          "Start Spam with: " + spam_delay_slider.value + " second delay";
      };

      document.onkeyup = function (e) {
        if (e.ctrlKey && e.keyCode == 186) {
          var deadcord_wrapper = document.getElementById("deadcord-menu");
          if (
            typeof deadcord_wrapper != "undefined" &&
            deadcord_wrapper != null
          ) {
            deadcord_wrapper.remove();
          } else {
            inject_ui();
          }
        }
      };
    }

    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "-header")) {
        document.getElementById(elmnt.id + "-header").onmousedown =
          dragMouseDown;
      } else {
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }

    function open_tab(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }

    function ping_tokens() {
      get_data("ping-tokens");
    }

    function join_tokens() {
      var server_invite = get_text_value("guild-invite");

      var join_delay = document.getElementById("join-delay-seconds").value;

      if (server_invite !== false) {
        post_data("join-guild", {
          invite: server_invite,
          delay: join_delay,
        });
      }
    }

    function leave_tokens() {
      post_data("leave-guild", {
        server_id: get_url()[4],
      });
    }

    function nick_tokens() {
      var nickname = get_text_value("nickname");

      if (nickname !== false) {
        post_data(`nick`, {
          server_id: get_url()[4],
          nickname: nickname,
        });
      }
    }

    function disguise_tokens() {
      get_data(`disguise`);
    }

    function speak_tokens() {
      var speak_message = get_text_value("speak-message");

      if (speak_message !== false) {
        post_data(`speak`, {
          server_id: get_url()[4],
          message: speak_message,
        });
      }
    }

    function send_friend_requests() {
      var friend_user_id = get_text_value("friend-user-id");

      if (friend_user_id !== false) {
        post_data(`friend`, {
          user_id: friend_user_id,
        });
      }
    }

    function remove_friend_requests() {
      var remove_friend_user_id = get_text_value("friend-user-id");

      if (remove_friend_user_id !== false) {
        post_data(`remove-friend`, {
          user_id: remove_friend_user_id,
        });
      }
    }

    function react_tokens() {
      var react_channel = get_text_value("react-channel-id");
      var react_message = get_text_value("react-message-id");
      var react_emoji = get_text_value("react-emoji");

      if (
        react_emoji !== false &&
        react_channel !== false &&
        react_message !== false
      ) {
        post_data(`react`, {
          emoji: react_emoji,
          channel_id: react_channel,
          message_id: react_message,
        });
      }
    }

    function start_spam() {
      var gathered_ids = [];
      var spam_content = get_text_value("messages");

      if (Object.keys(imported_channels).length > 0) {
        for (var key in imported_channels) {
          if (imported_channels.hasOwnProperty(key)) {
            gathered_ids.push(key);
          }
        }

        var spam_delay = document.getElementById("spam-delay-seconds").value;

        if (spam_content !== false) {
          post_data(`start-spam`, {
            server_id: get_url()[4],
            messages: spam_content,
            delay: spam_delay,
            channels: gathered_ids.join(),
            mode: parseInt(document.getElementById("spam_modes").value),
            tts: document.getElementById("tts-text").checked,
          });
        }
      } else {
        BdApi.showToast("Channels must be imported first.", {
          type: "error",
          timeout: "5500",
        });
        return;
      }
    }

    function start_typing_spam() {
      post_data(`start-typing-spam`, {
        channel_id: get_url()[5],
      });
    }

    function start_thread_spam() {
      var thread_name = get_text_value("thread-use-name");
      var channel_id = get_text_value("thread-channel-id");

      if (thread_name !== false && channel_id !== false) {
        post_data(`start-thread-spam`, {
          thread_name: thread_name,
          channel_id: channel_id,
        });
      }
    }

    function mass_create_invites() {
      var invites_channel_id = get_text_value("invites-channel-id");

      if (invites_channel_id !== false) {
        post_data("mass-invites", {
          channel_id: invites_channel_id,
        });
      }
    }

    function start_webhook_spam() {
      var webhook_url = get_text_value("webhook-url");
      var username = get_text_value("webhook-username");
      var webhook_spam_message = get_text_value("webhook-spam-message");

      if (
        username !== false &&
        webhook_url !== false &&
        webhook_spam_message !== false
      ) {
        post_data(`start-webhook-spam`, {
          webhook: webhook_url,
          username: username,
          message: webhook_spam_message,
        });
      }
    }

    function delete_webhook() {
      var webhook_url = get_text_value("webhook-url");

      if (webhook_url !== false) {
        post_data(`delete-webhook`, {
          webhook: webhook_url,
        });
      }
    }

    function stop_all() {
      get_data("stop-all");
    }

    function remove_channel(id) {
      delete imported_channels[id];
      document.getElementById(id).remove();
    }

    function import_channels() {
      imported_channels = {};
      var import_container = document.getElementById("channels-imported");
      import_container.innerHTML = "";
      post_data("fetch-channels", {
        server_id: get_url()[4],
      }).then((result) => {
        let obj = result.data.channels;
        Object.keys(obj).forEach((key) => {
          var chunk = obj[key].split(":");
          imported_channels[chunk[1]] = chunk[0];
          import_container.insertAdjacentHTML(
            "afterbegin",
            `<div class="closable-badge" id="${chunk[1]}">${chunk[0]}</div>`
          );
          document
            .getElementById(chunk[1])
            .addEventListener("click", function (e) {
              remove_channel(e.target.id);
            });
        });
      });
    }

    async function post_data(endpoint, data = {}) {
      try {
        const post_response = await fetch(
          `${config["ACCESS_URL"]}/deadcord/${endpoint}`,
          {
            method: "POST",
            cache: "no-cache",
            body: new URLSearchParams(data),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );
        const post_fetched = await post_response.json();
        BdApi.showToast(post_fetched["message"]);
        return post_fetched;
      } catch (err) {
        console.log(err);
      }
    }

    async function get_data(endpoint) {
      try {
        const get_response = await fetch(
          `${config["ACCESS_URL"]}/deadcord/${endpoint}`
        );
        const get_fetched = await get_response.json();
        BdApi.showToast(get_fetched["message"]);
        return get_fetched;
      } catch (err) {
        console.log(err);
      }
    }

    function get_url() {
      var format = window.location.href.split("/");

      for (const [key, value] of Object.entries(format)) {
        if (value.includes("#")) {
          format[key] = value.split("#")[0];
        }
      }
      return format;
    }

    function get_text_value(input_id) {
      var field = document.getElementById(input_id).value;
      if (field == null || field == "") {
        BdApi.showToast("You need to give the required input.", {
          type: "error",
          timeout: "5500",
        });
        return false;
      } else {
        return field;
      }
    }

    function check_for_updates() {
      require("request").get(
        "https://raw.githubusercontent.com/GalaxzyDev/Deadcord-Client/main/version.txt",
        async (error, response, body) => {
          if (parseFloat(body) > parseFloat(client_version)) {
            BdApi.showConfirmationModal(
              "Client Update Available!",
              [
                `An update for the Deadcord plugin is available. Updates are important and required to keep your Deadcord working.`,
              ],
              {
                confirmText: "Download",
                cancelText: "Cancel",
                onConfirm: () => {
                  require("request").get(
                    "https://raw.githubusercontent.com/GalaxzyDev/Deadcord-Client/main/Deadcord.plugin.js",
                    async (error, response, body) => {
                      if (error)
                        return require("electron").shell.openExternal(
                          "https://raw.githubusercontent.com/GalaxzyDev/Deadcord-Client/main/Deadcord.plugin.js"
                        );
                      await new Promise((r) =>
                        require("fs").writeFile(
                          require("path").join(
                            BdApi.Plugins.folder,
                            "Deadcord.plugin.js"
                          ),
                          body,
                          r
                        )
                      );
                    }
                  );
                  BdApi.alert(
                    "Update Complete!",
                    "Your Deadcord client should have updated to the latest version. If there are any issues, let us know."
                  );
                },
              }
            );
          } else {
            BdApi.alert(
              "Up to Date!",
              "Your Deadcord client is up to date. If you are looking for a update, wait a few minutes and try again."
            );
          }
        }
      );
    }
  }

  stop() {
    var deadcord_wrapper = document.getElementById("deadcord-menu");
    if (typeof deadcord_wrapper != "undefined" && deadcord_wrapper != null) {
      deadcord_wrapper.remove();
    }
  }
}
