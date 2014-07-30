/* Dependencies-13366 */
var e = jQuery;
var t = {
  init: function(t, n) {
    return this.each(function() {
      function i(e) {
        if (e && e.length > 1) {
        	console.log(e);
          var t = e.length,
            n = _.without(e, "anon"),
            i = t - n.length;
          e = _.uniq(e), a.text(e.length + i + " active users")
        } else a.text("1 active user")
      }

      function r(t) {
        var n = e("<div></div>").addClass("user");
        msginfo = e("<div></div>").addClass("chat-msginfo").appendTo(n), t.user && e("<span></span>").addClass("chat-nick").text(t).appendTo(msginfo), n.appendTo(c)
      }
      var o = e("<div/>", {
        "class": "field field-chatroom chat",
        id: "chatroom-" + t
      });
      e(this).append(o);
      var s = e("<div/>", {
        "class": "chatLog"
      }),
      a = (e("<div/>", {
        "class": "chatUsers"
      }), e("<div/>", {
        "class": "usersCount"
      })),
      l = e('<div class="formItem"><input class="fieldText" /></div>'),
      c = e("<div/>", {
        "class": "userLog"
      });
      o.append(s), o.prepend(a), o.append(l);
      var d = o.height();
      o.parent().css("overflow", "hidden !important"), s.css("height", d - 94), ty.realtime.join(t, "chat"), ty.get("chat/message/" + t, function(t) {
        i(t.users), t.users && e.each(t.users, function(e, t) {
          r(t)
        }), e.each(t.messages, function(e, t) {
          o.chat("render", t)
        }), s.scrollTop(s[0].scrollHeight)
    }), ty.chat = {
        chat: function(t) {
            e("#chatroom-" + t.channel).chat("render", t.message), ty.notification && t.message && ty.notification.send("chat", t.message.user, t.message.body)
        },
        joinChannel: function(t) {
            t.body = t.message + " joins the channel", i(t.users), e("#chatroom-" + t.channel).chat("render", t)
        },
        leaveChannel: function(t) {
            t.body = t.message + " leaves the channel", i(t.users), e("#chatroom-" + t.channel).chat("render", t)
        },
        disconnect: function(t) {
            t.body = t.message + " leaves the channel", i(t.users), e("#chatroom-" + t.channel).chat("render", t)
        }
      };
      var u = 0;
      l.find("input").bind("keydown", function(i) {
        if (13 == i.which) {
            i.preventDefault();
            var r = e(this).val();
            if (r.length > 1) {
                var s = !0;
                n && (s = !1);
                var a = localStorage.chat_typed || "";
                a = a.split("-|_|||_|"), storedTypedCount = a.length, storedTypedCount >= 15 && a.pop(), a.unshift(r), localStorage.chat_typed = a.join("-|_|||_|");
                var l;
                "/w " == r.substring(0, 3) && (l = _.trim(r.replace("/w ", ""))), message = {
                    message: {
                        body: r
                    },
                    channel: t,
                    db: s,
                    toUser: l,
                    handler: "chat.chat"
                }, ty.realtime.send(message), o.trigger("newMessage", [message.message]), e(this).val(""), u = 0
            }
        } else if (38 == i.which) {
            var a = localStorage.chat_typed || "";
            a = a.split("-|_|||_|"), e(this).val(a[u]), u++, u > 14 && (u = 14)
        } else if (40 == i.which) {
            var a = localStorage.chat_typed || "";
            a = a.split("-|_|||_|"), e(this).val(a[u]), u--, u > 14 ? u = 14 : 0 > u && (u = 0)
        }
      })
    })
  },
  close: function(t) {
    this.removeAttr("style"), ty.realtime.leave(t, "chat"), e(this).children(".chat").remove()
  },
  render: function(t) {
    function n(e) {
        var t = new Date(e),
            n = t.getHours(),
            i = t.getMinutes(),
            r = "AM";
        return n > 12 && (n -= 12, r = "PM"), 10 > i && (i = "0" + i), n + ":" + i + " " + r
    }
    var i = e(this),
        r = i.children(".chatLog"),
        o = e("<div></div>").addClass("chatMsg");
    if (msginfo = e("<div></div>").addClass("chatMsgInfo").appendTo(o), "anon" != t.user ? t.user && e("<a></a>").addClass("chatNick").attr("href", "/user/" + t.user).text(t.user).appendTo(msginfo) : e("<span></span>").addClass("chatNick").text(t.user).appendTo(msginfo), t.ct) {
        var s = n(parseInt(t.ct, 10));
        e("<time></time>").addClass("chatTime").text(s).appendTo(msginfo)
    }
    var a = e("<span/>", {
        "class": "chatText",
        text: t.body
    });
    a.appendTo(o), o.appendTo(r), r.scrollTop(r[0].scrollHeight), i.trigger("renderMessage", [t])
  }
};
jQuery.fn.chat = function(e) {return t[e] ? t[e].apply(this, Array.prototype.slice.call(arguments, 1)) : t.init.apply(this, arguments)}
/* Call */
$("#right").css("height", "100%").chat("game-367180") //RSO gameID