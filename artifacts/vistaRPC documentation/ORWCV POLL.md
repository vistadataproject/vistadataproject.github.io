---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV POLL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV POLL{:/}
 tag | {::nomarkdown}POLL{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is a process to poll the cover sheet tasks for completion anddisplay the information in the appropriate CPRS GUI cover sheet location.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | POLL^[ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 Method comment | poll for completed cover sheet parts
 Input parameters | {::nomarkdown}DFN<br>IP<br>HWND{:/}
 Code | {::nomarkdown}  N I,ILST,ID,NODE,DONE<br> S NODE="ORWCV "_IP_"-"_HWND_"-"_DFN,ILST=0,DONE=0<br> I '$D(^XTMP(NODE,"DFN")) Q<br> I ^XTMP(NODE,"DFN")'=DFN S LST(1)="~DONE=1" Q<br> I $G(^XTMP(NODE,"DONE")) S ILST=ILST+1,LST(ILST)="~DONE=1",DONE=1<br> F ID="PROB","CWAD","MEDS","RMND","LABS","VITL","VSIT" D<br> . I '$G(^XTMP(NODE,ID)) Q<br> . S ILST=ILST+1,LST(ILST)="~"_ID<br> . S I=0 F  S I=$O(^XTMP(NODE,ID,I)) Q:'I  S ILST=ILST+1,LST(ILST)="i"_^(I)<br> . K ^XTMP(NODE,ID)<br> I DONE K ^XTMP(NODE) I +$G(^KMPTMP("KMPD-CPRS")) S $P(^KMPTMP("KMPDT","ORWCV",NODE),"^",2)=$H{:/}


### CPRS

[rCover.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}