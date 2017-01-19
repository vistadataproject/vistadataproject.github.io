---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE CHECK BOILERPLATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE CHECK BOILERPLATE{:/}
 tag | {::nomarkdown}BPCHECK{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will evaluate boilerplate passed in the input array, checking tosee whether any of the embedded objects are inactive, faulty, orambiguous.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a local array containg boilerplate text for the template in wordprocessing subscript format, e.g.: TIUX(2,1,0)=\The pt. is a AGE yo RACE SEX who presented to the\TIUX(2,2,0)=\PULMONARY clinic on VISIT DATE for pulmonary function\TIUX(2,3,0)=\tests to rule out Asthma/COPD.\{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | BPCHECK^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Checks objects in boilerplate text.
 Input parameters | {::nomarkdown}TIUX{:/}
 Code | {::nomarkdown}  N LINE,TIUI,TIUFWHO,TIUFPRIV,TIUY<br> S TIUI=0,TIUY=1,TIUFPRIV=1,TIUFWHO="M"<br> K ^TMP("TIUF",$J)<br> F  S TIUI=$O(TIUX(2,TIUI)) Q:+TIUI'>0  D  Q:'+TIUY<br> . S LINE=$G(TIUX(2,TIUI,0))<br> . I LINE["|" D<br> . . I ($L(LINE,"|")+1)#2 D  Q<br> . . . S TIUY=0<br> . . . S TIUTY(1)="Object split between lines, rest of line not checked:"<br> . . . S TIUTY(2)=LINE<br> . . N PIECE<br> . . F PIECE=2:2:$L(LINE,"|") D  Q:TIUY=0<br> . . . N OBJNM<br> . . . S OBJNM=$P(LINE,"|",PIECE)<br> . . . I OBJNM="" D  Q<br> . . . . S TIUY=0<br> . . . . S TIUTY(1)="Brackets are there, but there's no name inside ||:"<br> . . . . S TIUTY(2)=LINE<br> . . . N XREF,ARR<br> . . . F XREF="B","C","D" D  Q:'+TIUY<br> . . . . N ODA S ODA=0<br> . . . . F  S ODA=$O(^TIU(8925.1,XREF,OBJNM,ODA)) Q:+ODA'>0  D  Q:'+TIUY<br> . . . . . S:$D(^TIU(8925.1,"AT","O",ODA)) ARR(ODA)=""<br> . . . . . I $O(ARR($O(ARR(0)))) D<br> . . . . . . S TIUY=0<br> . . . . . . S TIUTY(1)="Object |"_OBJNM_"| is ambiguous."<br> . . . . . . S TIUTY(2)="It could be any of SEVERAL objects. Please contact IRM."<br> . . . I '$D(ARR) D  Q<br> . . . . S TIUY=0<br> . . . . S TIUTY(1)="Object |"_OBJNM_"| cannot be found in the file."<br> . . . . S TIUTY(2)="Use UPPERCASE and object's exact NAME, PRINT NAME, or ABBREVIATION."<br> . . . . S TIUTY(3)="Any of these may have changed since |"_OBJNM_"| was embedded."<br> . . . S ODA=$O(ARR(0)) N OBJCK D CHECK^TIUFLF3(ODA,0,0,.OBJCK)<br> . . . I '+OBJCK D  Q:'+TIUY<br> . . . . N SUBS<br> . . . . F SUBS="F","T","O","S","J" D<br> . . . . . I $D(OBJCK(SUBS)) D<br> . . . . . . S TIUY=0<br> . . . . . . S TIUTY(1)="Object |"_OBJNM_"| is faulty: "<br> . . . . . . S TIUTY(2)=OBJCK(SUBS)_"."<br> . . . I $P(^TIU(8925.1,ODA,0),U,7)'=11 D<br> . . . . S TIUY=0<br> . . . . S TIUTY(1)="Object |"_OBJNM_"| is NOT ACTIVE."<br> K ^TMP("TIUF",$J)<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}