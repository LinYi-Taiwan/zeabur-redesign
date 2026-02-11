import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./mock-data-BdiCldce.js";import{c as d}from"./createLucideIcon-D-mjsK-g.js";import"./index-DwQS_Y10.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=d("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=d("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=d("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=d("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=d("MemoryStick",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=d("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);function Z({color:r,gradientId:a,data:t}){const p=Math.max(...t),l=Math.min(...t),o=p-l||1,u=t.map((x,B)=>({x:B/(t.length-1)*532,y:48-(x-l)/o*48*.9-48*.05})).map((x,B)=>`${B===0?"M":"L"} ${x.x} ${x.y}`).join(" "),C=`${u} L 532 48 L 0 48 Z`;return e.jsxs("svg",{viewBox:"0 0 532 48",className:"w-full h-12",preserveAspectRatio:"none",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:r,stopOpacity:.25}),e.jsx("stop",{offset:"100%",stopColor:r,stopOpacity:0})]})}),e.jsx("path",{d:C,fill:`url(#${a})`}),e.jsx("path",{d:u,fill:"none",stroke:r,strokeWidth:"1.5"})]})}function K(){return e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-[10px] font-mono text-zinc-600",children:"00:00"}),e.jsx("span",{className:"text-[10px] font-mono text-zinc-600",children:"06:00"}),e.jsx("span",{className:"text-[10px] font-mono text-zinc-600",children:"12:00"})]})}function Q({icon:r,iconColor:a,bgColor:t,borderColor:n,text:s}){return e.jsxs("div",{className:"flex gap-2 rounded-md p-[10px_12px]",style:{backgroundColor:t,borderLeft:`2px solid ${n}`},children:[e.jsx(r,{className:"w-3.5 h-3.5 shrink-0 mt-0.5",style:{color:a}}),e.jsx("p",{className:"text-[11px] leading-[1.4] text-[var(--muted-foreground)]",children:s})]})}function i({icon:r,iconColor:a,iconBgColor:t,value:n,label:s,sublabel:p,sublabelColor:l="text-zinc-500",chartColor:o,chartGradientId:c,chartData:u,alert:C}){return e.jsxs("div",{className:"flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center",style:{backgroundColor:t},children:e.jsx(r,{className:"w-[18px] h-[18px]",style:{color:a}})}),e.jsx("span",{className:"text-2xl font-semibold font-mono text-[var(--foreground)]",children:n})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[13px] font-semibold text-[var(--foreground)]",children:s}),e.jsx("div",{className:`text-[11px] font-mono ${l}`,children:p})]}),e.jsx(Z,{color:o,gradientId:c,data:u}),e.jsx(K,{}),C&&e.jsx(Q,{...C})]})}function J(){const{current:r,cost:a}=E,t=E.timeSeries["12h"].map(o=>o.cpu),n=E.timeSeries["12h"].map(o=>o.memory),s=t.map((o,c)=>.8+c/t.length*.6+Math.random()*.1),p=t.map((o,c)=>.3+Math.exp(-((c-t.length*.6)**2)/(2*(t.length*.15)**2))*.9),l=Math.round((a.estimated-a.previousMonth)/a.previousMonth*100);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(i,{icon:M,iconColor:"#7C3AED",iconBgColor:"#7C3AED20",value:`${r.cpu.percent}%`,label:"CPU 使用率",sublabel:`目前使用 ${r.cpu.used} / ${r.cpu.limit} vCPU`,chartColor:"#7C3AED",chartGradientId:"cpuGrad",chartData:t,alert:{icon:H,iconColor:"#7C3AED",bgColor:"#7C3AED08",borderColor:"#7C3AED",text:"CPU 用量偏低，目前方案足夠應付流量。如需更快回應速度可考慮升級。"}}),e.jsx(i,{icon:O,iconColor:"#3B82F6",iconBgColor:"#3B82F620",value:`${r.memory.used}MB`,label:"記憶體使用量",sublabel:`目前使用 ${r.memory.used} / ${r.memory.limit} MB`,chartColor:"#3B82F6",chartGradientId:"memGrad",chartData:n,alert:{icon:W,iconColor:"#EAB308",bgColor:"#EAB30808",borderColor:"#EAB308",text:"記憶體用量已達 49%，接近警戒線。建議升級至 512MB 以避免服務中斷。"}})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(i,{icon:V,iconColor:"#22C55E",iconBgColor:"#22C55E20",value:`$${a.estimated.toFixed(2)}`,label:"預估月費",sublabel:`較上月 +${l}% ↑`,sublabelColor:"text-emerald-500",chartColor:"#22C55E",chartGradientId:"costGrad",chartData:s}),e.jsx(i,{icon:R,iconColor:"#EAB308",iconBgColor:"#EAB30820",value:`${r.network.used}GB`,label:"網路流量",sublabel:"本月累計傳輸量",chartColor:"#EAB308",chartGradientId:"netGrad",chartData:p})]})]})}Z.__docgenInfo={description:"Mini sparkline chart rendered as SVG",methods:[],displayName:"MiniAreaChart",props:{color:{required:!0,tsType:{name:"string"},description:""},gradientId:{required:!0,tsType:{name:"string"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"MetricCard",props:{icon:{required:!0,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},iconColor:{required:!0,tsType:{name:"string"},description:""},iconBgColor:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},sublabel:{required:!0,tsType:{name:"string"},description:""},sublabelColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"text-zinc-500"',computed:!1}},chartColor:{required:!0,tsType:{name:"string"},description:""},chartGradientId:{required:!0,tsType:{name:"string"},description:""},chartData:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},alert:{required:!1,tsType:{name:"AlertTipProps"},description:""}}};J.__docgenInfo={description:"",methods:[],displayName:"ResourceSummary"};const m=Array.from({length:60},(r,a)=>15+Math.sin(a/8)*10+Math.random()*5),ae={title:"Components/MetricCard",component:i,parameters:{layout:"centered",backgrounds:{default:"dark"}},tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{width:540},children:e.jsx(r,{})})]},g={args:{icon:M,iconColor:"#7C3AED",iconBgColor:"#7C3AED20",value:"12%",label:"CPU 使用率",sublabel:"目前使用 0.12 / 1 vCPU",chartColor:"#7C3AED",chartGradientId:"cpuGrad",chartData:m,alert:{icon:H,iconColor:"#7C3AED",bgColor:"#7C3AED08",borderColor:"#7C3AED",text:"CPU 用量偏低，目前方案足夠應付流量。如需更快回應速度可考慮升級。"}}},b={args:{icon:O,iconColor:"#3B82F6",iconBgColor:"#3B82F620",value:"126MB",label:"記憶體使用量",sublabel:"目前使用 126 / 256 MB",chartColor:"#3B82F6",chartGradientId:"memGrad",chartData:m.map(r=>r*8),alert:{icon:W,iconColor:"#EAB308",bgColor:"#EAB30808",borderColor:"#EAB308",text:"記憶體用量已達 49%，接近警戒線。建議升級至 512MB 以避免服務中斷。"}}},y={args:{icon:V,iconColor:"#22C55E",iconBgColor:"#22C55E20",value:"$1.33",label:"預估月費",sublabel:"較上月 +12% ↑",sublabelColor:"text-emerald-500",chartColor:"#22C55E",chartGradientId:"costGrad",chartData:m.map((r,a)=>.8+a/60*.6)}},v={args:{icon:R,iconColor:"#EAB308",iconBgColor:"#EAB30820",value:"1.2GB",label:"網路流量",sublabel:"本月累計傳輸量",chartColor:"#EAB308",chartGradientId:"netGrad",chartData:m}},A={args:{icon:M,iconColor:"#7C3AED",iconBgColor:"#7C3AED20",value:"45%",label:"CPU 使用率",sublabel:"目前使用 0.45 / 1 vCPU",chartColor:"#7C3AED",chartGradientId:"cpuGradNoAlert",chartData:m}},h={render:()=>e.jsx(J,{})};h.storyName="2x2 Metric Grid";var D,f,k;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    icon: Cpu,
    iconColor: "#7C3AED",
    iconBgColor: "#7C3AED20",
    value: "12%",
    label: "CPU 使用率",
    sublabel: "目前使用 0.12 / 1 vCPU",
    chartColor: "#7C3AED",
    chartGradientId: "cpuGrad",
    chartData: sampleChartData,
    alert: {
      icon: Lightbulb,
      iconColor: "#7C3AED",
      bgColor: "#7C3AED08",
      borderColor: "#7C3AED",
      text: "CPU 用量偏低，目前方案足夠應付流量。如需更快回應速度可考慮升級。"
    }
  }
}`,...(k=(f=g.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var j,G,N;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: MemoryStick,
    iconColor: "#3B82F6",
    iconBgColor: "#3B82F620",
    value: "126MB",
    label: "記憶體使用量",
    sublabel: "目前使用 126 / 256 MB",
    chartColor: "#3B82F6",
    chartGradientId: "memGrad",
    chartData: sampleChartData.map(v => v * 8),
    alert: {
      icon: TriangleAlert,
      iconColor: "#EAB308",
      bgColor: "#EAB30808",
      borderColor: "#EAB308",
      text: "記憶體用量已達 49%，接近警戒線。建議升級至 512MB 以避免服務中斷。"
    }
  }
}`,...(N=(G=b.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var $,w,T;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    icon: DollarSign,
    iconColor: "#22C55E",
    iconBgColor: "#22C55E20",
    value: "$1.33",
    label: "預估月費",
    sublabel: "較上月 +12% ↑",
    sublabelColor: "text-emerald-500",
    chartColor: "#22C55E",
    chartGradientId: "costGrad",
    chartData: sampleChartData.map((_, i) => 0.8 + i / 60 * 0.6)
  }
}`,...(T=(w=y.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var q,I,P;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    icon: Activity,
    iconColor: "#EAB308",
    iconBgColor: "#EAB30820",
    value: "1.2GB",
    label: "網路流量",
    sublabel: "本月累計傳輸量",
    chartColor: "#EAB308",
    chartGradientId: "netGrad",
    chartData: sampleChartData
  }
}`,...(P=(I=v.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var S,U,_;A.parameters={...A.parameters,docs:{...(S=A.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: Cpu,
    iconColor: "#7C3AED",
    iconBgColor: "#7C3AED20",
    value: "45%",
    label: "CPU 使用率",
    sublabel: "目前使用 0.45 / 1 vCPU",
    chartColor: "#7C3AED",
    chartGradientId: "cpuGradNoAlert",
    chartData: sampleChartData
  }
}`,...(_=(U=A.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var z,F,L;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ResourceSummary />
}`,...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const te=["CPUCard","MemoryCard","CostCard","NetworkCard","WithoutAlert","FullGrid"];export{g as CPUCard,y as CostCard,h as FullGrid,b as MemoryCard,v as NetworkCard,A as WithoutAlert,te as __namedExportsOrder,ae as default};
