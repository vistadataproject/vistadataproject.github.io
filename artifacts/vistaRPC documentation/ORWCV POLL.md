---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV POLL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV POLL{:/}
 tag | {::nomarkdown}POLL{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is a process to poll the cover sheet tasks for completion anddisplay the information in the appropriate CPRS GUI cover sheet location.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | poll for completed cover sheet parts
 Input Parameters | {::nomarkdown}DFN<br/>IP<br/>HWND{:/}
 Lines | ```{::nomarkdown} N I,ILST,ID,NODE,DONE<br/> S NODE="ORWCV "_IP_"-"_HWND_"-"_DFN,ILST=0,DONE=0<br/> I '$D(^XTMP(NODE,"DFN")) Q<br/> I ^XTMP(NODE,"DFN")'=DFN S LST(1)="~DONE=1" Q<br/> I $G(^XTMP(NODE,"DONE")) S ILST=ILST+1,LST(ILST)="~DONE=1",DONE=1<br/> F ID="PROB","CWAD","MEDS","RMND","LABS","VITL","VSIT" D<br/> . I '$G(^XTMP(NODE,ID)) Q<br/> . S ILST=ILST+1,LST(ILST)="~"_ID<br/> . S I=0 F  S I=$O(^XTMP(NODE,ID,I)) Q:'I  S ILST=ILST+1,LST(ILST)="i"_^(I)<br/> . K ^XTMP(NODE,ID)<br/> I DONE K ^XTMP(NODE) I +$G(^KMPTMP("KMPD-CPRS")) S $P(^KMPTMP("KMPDT","ORWCV",NODE),"^",2)=$H```{:/}




 Generated on January 13th 2017, 7:11:26 am