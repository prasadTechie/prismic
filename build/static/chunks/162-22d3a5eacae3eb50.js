"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{8758:function(e,s,l){l.d(s,{sg:function(){return r},X2:function(){return o}});var t=l(7297),i=l(5893);l(7294),l(5767);var n=l(9521);function a(){let e=(0,t.Z)(["\n  width: 100%;\n  height: 0.5px;\n  background: #d9d9d9;\n  border: none;\n"]);return a=function(){return e},e}let o=e=>{let{children:s,style:l,...t}=e;return(0,i.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",...l},...t,children:s})},r=e=>{let{children:s,style:l,...t}=e;return(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",...l},...t,children:s})};(0,n.ZP)("hr")(a())},7162:function(e,s,l){l.d(s,{wx:function(){return S}});var t=l(5893),i=l(7294),n=l(8758),a=l(6066);l(9249),l(7101);var o=l(7297),r=l(1818),c=l(3253),d=l.n(c);let m=(e,s)=>{};function h(){let e=(0,o.Z)(["\n  width: 100%;\n  height: 80px;\n  position: fixed;\n  bottom: 0;\n  align-items: center;\n  background: linear-gradient(\n    360deg,\n    #ffffff 51.78%,\n    rgba(255, 255, 255, 0) 106.9%\n  );\n  padding-top: 1rem;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 20px;\n  z-index: 1000;\n"]);return h=function(){return e},e}(0,l(9521).ZP)(n.sg)(h());let u=e=>{var s,l,a,o,c,d,h,u;let{slice:x}=e,[_,p]=(0,i.useState)(50),[g,j]=(0,i.useState)(!1),[v,b]=(0,i.useState)(!1),[y,N]=(0,i.useState)(""),[f,k]=(0,i.useState)({image:null==x?void 0:null===(s=x.primary)||void 0===s?void 0:null===(l=s.hearth_animation)||void 0===l?void 0:l.url,className:"heart_animation"});(0,i.useEffect)(()=>{N(window.location.origin)});let w=()=>{var e,s,l,t;if(g)k({image:null==x?void 0:null===(e=x.primary)||void 0===e?void 0:null===(s=e.hearth_animation)||void 0===s?void 0:s.url,className:"heart_animation"}),j(!1),p(_-1);else{let e=new Image;e.src=null==x?void 0:null===(l=x.primary)||void 0===l?void 0:null===(t=l.hearth_animation)||void 0===t?void 0:t.url,e.onload=()=>{j(!0),p(_+1)}}};(0,i.useEffect)(()=>{g&&setTimeout(()=>{var e,s;k({image:null==x?void 0:null===(e=x.primary)||void 0===e?void 0:null===(s=e.red_heart_icon)||void 0===s?void 0:s.url,className:"heart_liked"})},1e3)},[g]);let S=e=>{b(e)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.X2,{className:"footer_section",children:[(0,t.jsxs)(n.X2,{className:"footer_like_section",onClick:w,children:[g?(0,t.jsx)("img",{src:f.image,className:f.className,alt:""}):(0,t.jsx)("img",{src:null==x?void 0:null===(a=x.primary)||void 0===a?void 0:null===(o=a.like_icon)||void 0===o?void 0:o.url,className:"heart_icon",alt:""}),(0,t.jsx)("span",{className:"likes_no",children:_})," ",(0,t.jsx)("span",{className:"likes",children:"likes"})]}),(0,t.jsxs)(n.X2,{className:"footer_like_comment_section",onClick:()=>S(!0),children:[(0,t.jsx)("img",{src:null==x?void 0:null===(c=x.primary)||void 0===c?void 0:null===(d=c.comment_icon)||void 0===d?void 0:d.url,className:"comments_icon",alt:""}),(0,t.jsx)("span",{children:"178 comments"})]}),(0,t.jsx)(r.N0,{url:y,title:"Hello Friend, Check out this interesting blog I found on the Toondemy community!",children:(0,t.jsxs)(n.X2,{children:[(0,t.jsx)("img",{src:null==x?void 0:null===(h=x.primary)||void 0===h?void 0:null===(u=h.share_icon)||void 0===u?void 0:u.url,className:"share_icon",alt:""}),(0,t.jsx)("span",{children:"12 share"})]})})]}),(0,t.jsx)(m,{open:v})]})};var x=l(1664),_=l.n(x);let p=e=>{var s,l;let{slice:o}=e,[r,c]=(0,i.useState)(!1),[m,h]=(0,i.useState)(""),[x,p]=(0,i.useState)(0),[g,j]=(0,i.useState)([]),[v]=(0,i.useState)(7e3),[b,y]=(0,i.useState)(!1),N=e=>{let s=document.querySelector(".slick-dots.slick-thumb li.slick-active"),l=s;l.style.backgroundPosition="left",l.style.transition="all 7s ease-out",setTimeout(()=>{l.style.transition="all 0ms ease-out",l.style.background="#FFB001"},v-1e3),p(e)},f=(e,s)=>{j([...g,e]);let l=document.querySelectorAll(".slick-dots.slick-thumb li"),t=l[e];t.style.transition="all 0ms ease-out",t.style.background="#FFB001"},k=e=>{r||(c(!0),h(e))},w=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(w.current){let e=new Image;e.src=BlogLibraryImages.ShortImage,e.onload=()=>{var s;let l=e.naturalHeight/e.naturalWidth,t=null===(s=w.current)||void 0===s?void 0:s.offsetWidth;if(t){let e=t*l;console.log("height",e);let s=document.querySelector(".slick-dots.slick-thumb");s&&(s.style.top="".concat(e-40,"px"))}}}N(0)},[]);let S=e=>{console.log(e,"comment clicked"),y(e)};return(0,t.jsxs)(n.sg,{style:{position:"relative",width:"100%",overflowX:"hidden"},children:[(0,t.jsx)(_(),{href:"/",children:(0,t.jsx)("img",{src:null==o?void 0:null===(s=o.primary)||void 0===s?void 0:null===(l=s.back_button)||void 0===l?void 0:l.url,className:"back_button",alt:""})}),(0,t.jsx)(a.Z,{dots:!0,infinite:!0,speed:500,initialSlide:0,slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:v,swipeToSlide:!0,afterChange:e=>N(e),customPaging:function(e){return(0,t.jsx)("div",{style:{opacity:"0",pointerEvents:"none"},children:e})},dotsClass:"slick-dots slick-thumb",beforeChange:f,children:o.items.map((e,s)=>{var l,i,a,o,c,d,m,h,u;return(0,t.jsxs)("div",{children:[console.log(e,"items"),(0,t.jsx)("img",{src:e.slider_background.url,alt:e.slider_background.alt,className:"shorts_img"}),(0,t.jsxs)(n.sg,{className:"shorts_body_section",children:[(0,t.jsxs)(n.sg,{className:"short_body_header",children:[(0,t.jsx)("img",{src:e.purple_background.url,alt:e.purple_background.alt,className:"short_body_header_img"}),(0,t.jsxs)(n.sg,{style:{padding:"0 19px"},children:[(0,t.jsx)("span",{className:"shorts_title",children:e.title[0].text}),(0,t.jsxs)(n.X2,{style:{width:"100%",position:"relative",justifyContent:"flex-start",alignItems:"center",marginTop:"0.8rem"},children:[(0,t.jsxs)(n.X2,{style:{alignItems:"center",marginRight:"25px"},children:[(0,t.jsx)("img",{src:e.clock_icon.url,alt:e.clock_icon.alt,style:{position:"relative"},className:"clock_icon_white"}),(0,t.jsx)("span",{className:"time_shorts_views_text",children:"5 min"})]}),(0,t.jsxs)(n.X2,{style:{alignItems:"center",marginRight:"25px"},children:[(0,t.jsx)("img",{src:e.short_icon.url,alt:e.short_icon.alt,style:{position:"relative"},className:"shorts_icon_white"}),(0,t.jsx)("span",{className:"time_shorts_views_text",children:"7 shorts"})]}),(0,t.jsxs)(n.X2,{style:{alignItems:"center",marginRight:"10px"},children:[(0,t.jsx)("img",{src:e.view_icon.url,alt:e.view_icon.alt,style:{position:"relative"},className:"views_icon_white"}),(0,t.jsx)("span",{className:"time_shorts_views_text",children:"121 views"})]})]})]})]}),(0,t.jsxs)(n.sg,{style:{padding:"0 19px",marginTop:"40px",paddingBottom:"150px"},children:[(0,t.jsx)("span",{className:"shorts_subtitle",children:e.title[0].text}),(0,t.jsx)("p",{className:"shorts_body_text",children:e.paragraph[0].text}),console.log(e.poll_question.length),(null==e?void 0:e.poll_question.length)>=1?(0,t.jsxs)(n.sg,{className:"vaccinate_poll_section",style:{alignSelf:"center"},children:[(0,t.jsx)("span",{className:"ques",children:"Question:"}),(0,t.jsx)("span",{className:"shorts_subtitle",children:e.question[0].text}),(0,t.jsx)(n.sg,{style:{width:"100%"},children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.X2,{className:"poll_button",onClick:()=>k("Yes"),children:r?(0,t.jsxs)(n.X2,{className:"poll_button_voted",children:[(0,t.jsx)(n.sg,{className:"poll_voted poll_vote_yes",children:null===(l=e.poll_question[0])||void 0===l?void 0:l.text}),(0,t.jsx)("span",{className:"vote_percentage",children:null===(i=e.poll_answer[0])||void 0===i?void 0:i.text})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:e.poll_question_icon.url,alt:e.poll_question_icon.alt})," ",(0,t.jsx)("span",{children:null===(a=e.poll_question[0])||void 0===a?void 0:a.text})]})}),(0,t.jsx)(n.X2,{className:"poll_button",onClick:()=>k("No"),children:r?(0,t.jsxs)(n.X2,{className:"poll_button_voted",children:[(0,t.jsx)(n.sg,{className:"poll_voted poll_vote_no",children:null===(o=e.poll_question_2[0])||void 0===o?void 0:o.text}),(0,t.jsx)("span",{className:"vote_percentage",children:null===(c=e.poll_answer_2[0])||void 0===c?void 0:c.text})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:e.poll_question_2_icon.url,alt:e.poll_question_2_icon.alt})," ",(0,t.jsx)("span",{children:null===(d=e.poll_question_2[0])||void 0===d?void 0:d.text})]})}),(0,t.jsx)(n.X2,{className:"poll_button",onClick:()=>k("Not sure"),children:r?(0,t.jsxs)(n.X2,{className:"poll_button_voted",children:[(0,t.jsx)(n.sg,{className:"poll_voted poll_vote_not_sure",children:""}),(0,t.jsx)("span",{className:"poll_button_voted_not_sure",children:null===(m=e.poll_question_3[0])||void 0===m?void 0:m.text}),(0,t.jsx)("span",{className:"vote_percentage",children:null===(h=e.poll_answer_3[0])||void 0===h?void 0:h.text})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:e.poll_question_3_icon.url,alt:e.poll_question_3_icon.url})," ",(0,t.jsx)("span",{children:null===(u=e.poll_question_3[0])||void 0===u?void 0:u.text})]})})]})})]}):"",(null==e?void 0:e.paragraph_2.length)>=1?(0,t.jsx)("p",{className:"shorts_body_text",children:e.paragraph_2[0].text}):""]})]})]},s)})}),(0,t.jsx)(u,{setCommentIconClicked:S}),b?(0,t.jsx)(d(),{isOpen:b,style:{content:{width:"300px",transform:"translate(-50%, -50%)",border:"none",inset:"auto 50% 0",borderRadius:"10px",background:"white",overflowX:"hidden"},overlay:{background:"#00000099",zIndex:100,overflowY:"auto"}},children:(0,t.jsxs)(n.sg,{className:"validate_acc_section",children:[(0,t.jsx)("span",{children:"Comment validation"}),(0,t.jsx)("p",{children:"We take utmost care to ensure the comments are gentle & sensible. For that we check all accounts carefully."}),(0,t.jsx)("button",{className:"validate_acc_btn",onClick:()=>setOpen(!1),children:"Please validate my account"})]})}):""]})},g=e=>{var s;let{slice:l}=e,[a,o]=(0,i.useState)(!1),[c,d]=(0,i.useState)(!1),[m,h]=(0,i.useState)(!1),[u,x]=(0,i.useState)(0),[_,p]=(0,i.useState)([]),g=(0,i.useRef)(null);return(0,t.jsxs)("section",{background:"#fff",children:[console.log(JSON.stringify(l,null,2)),(0,t.jsx)("div",{className:"container",children:(0,t.jsx)(n.sg,{style:{position:"relative",width:"100%",overflowX:"hidden"},children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.sg,{style:{position:"relative",width:"100%",paddingBottom:"3rem"},children:null===(s=l.items)||void 0===s?void 0:s.map((e,s)=>(0,t.jsxs)("div",{ref:g,children:[(0,t.jsx)("img",{src:e.sliderimage.url,alt:e.sliderimage.alt,className:"shorts_img"}),(0,t.jsxs)(n.sg,{className:"shorts_body_section",children:[(0,t.jsxs)(n.sg,{className:"short_body_header",children:[(0,t.jsx)("img",{src:e.slider_bg_image.url,alt:e.slider_bg_image.alt,className:"short_body_header_img"}),(0,t.jsxs)(n.sg,{style:{padding:"0 19px"},children:[(0,t.jsx)("span",{className:"shorts_title",children:e.slidertitle[0].text}),(0,t.jsxs)(n.X2,{style:{width:"100%",position:"relative",justifyContent:"flex-start",alignItems:"center",marginTop:"0.8rem"},children:[(0,t.jsxs)(n.X2,{style:{alignItems:"center",marginRight:"25px"},children:[(0,t.jsx)("img",{src:e.clockicon.url,alt:e.clockicon.alt,style:{position:"relative"},className:"clock_icon_white"}),(0,t.jsx)("span",{className:"time_shorts_views_text",children:"5 min"})]}),(0,t.jsxs)(n.X2,{style:{alignItems:"center",marginRight:"25px"},children:[(0,t.jsx)("img",{src:e.clockicon.url,alt:e.clockicon.alt,style:{position:"relative"},className:"shorts_icon_white"}),(0,t.jsx)("span",{className:"time_shorts_views_text",children:"7 shorts"})]}),(0,t.jsxs)(n.X2,{style:{alignItems:"center",marginRight:"10px"},children:[(0,t.jsx)("img",{src:e.clockicon.url,alt:e.clockicon.alt,style:{position:"relative"},className:"views_icon_white"}),(0,t.jsx)("span",{className:"time_shorts_views_text",children:"121 views"})]})]})]})]}),(0,t.jsxs)(n.sg,{style:{padding:"0 19px"},children:[(0,t.jsx)("span",{className:"shorts_subtitle",children:e.slidertitle[0].text}),(0,t.jsx)("p",{className:"shorts_body_text",children:e.blogfulldescription})]})]})]},s))}),(0,t.jsx)("div",{children:(0,t.jsxs)(n.X2,{style:{alignItems:"center",width:"300px",justifyContent:"space-around"},children:[(0,t.jsxs)(n.sg,{children:[(0,t.jsx)("img",{src:"ShortsImages.LikeIcon",className:"like_icon",alt:""}),(0,t.jsx)("span",{children:"78 likes"})]}),(0,t.jsxs)(n.sg,{children:[(0,t.jsx)("img",{src:"ShortsImages.CommentsIcon",className:"comments_icon",alt:"",onClick:()=>d(!0)}),(0,t.jsx)("span",{children:"13 comments"})]}),(0,t.jsx)(r.N0,{url:"window.location.hostname",title:"Hello Friend, Check out this interesting blog I found on the Toondemy community!",children:(0,t.jsxs)(n.sg,{children:[(0,t.jsx)("img",{src:"ShortsImages.ShareIcon",className:"share_icon",alt:""}),(0,t.jsx)("span",{children:"share"})]})})]})})]})})})]})},j=e=>{var s;let{slice:l}=e;return(0,t.jsxs)("section",{style:{padding:"20px 15px"},children:[(0,t.jsx)("span",{className:"story_title",children:"blog list"}),null==l?void 0:null===(s=l.items)||void 0===s?void 0:s.map((e,s)=>{n.X2,e.blogthumbnail.url,e.blogthumbnail.alt,e.blogthumbnail.url,e.blogthumbnail.alt})]})};var v=l(357),b=l.n(v),y=l(1980);let N=e=>{let{slice:s}=e;return(0,t.jsxs)("section",{className:"jsx-b4b2ddad15ca5b51",children:[(0,t.jsx)("span",{className:"jsx-b4b2ddad15ca5b51 title",children:s.primary.title?(0,t.jsx)(y.v,{field:s.primary.title}):(0,t.jsx)("h2",{className:"jsx-b4b2ddad15ca5b51",children:"Template slice, update me!"})}),s.primary.description?(0,t.jsx)(y.v,{field:s.primary.description}):(0,t.jsx)("p",{className:"jsx-b4b2ddad15ca5b51",children:"start by editing this slice from inside Slice Machine!"}),(0,t.jsx)(b(),{id:"b4b2ddad15ca5b51",children:"section.jsx-b4b2ddad15ca5b51{max-width:600px;margin:4em auto;text-align:center}.title.jsx-b4b2ddad15ca5b51{color:#8592e0}"})]})},f=e=>{let{slice:s}=e;return(0,t.jsx)("section",{})},k=e=>{let{slice:s}=e;return(0,t.jsxs)("section",{className:"jsx-b4b2ddad15ca5b51",children:[(0,t.jsx)("span",{className:"jsx-b4b2ddad15ca5b51 title",children:s.primary.title?(0,t.jsx)(y.v,{field:s.primary.title}):(0,t.jsx)("h2",{className:"jsx-b4b2ddad15ca5b51",children:"Template slice, update me!"})}),s.primary.description?(0,t.jsx)(y.v,{field:s.primary.description}):(0,t.jsx)("p",{className:"jsx-b4b2ddad15ca5b51",children:"start by editing this slice from inside Slice Machine!"}),(0,t.jsx)(b(),{id:"b4b2ddad15ca5b51",children:"section.jsx-b4b2ddad15ca5b51{max-width:600px;margin:4em auto;text-align:center}.title.jsx-b4b2ddad15ca5b51{color:#8592e0}"})]})},w=e=>{let{slice:s}=e;return""},S={blog_detail_with_poll:p,blog_details:g,blog_lists:j,comment_modal:m,filter_tags:N,footer:u,header_background_image:f,paragraph:k,polling:w}}}]);