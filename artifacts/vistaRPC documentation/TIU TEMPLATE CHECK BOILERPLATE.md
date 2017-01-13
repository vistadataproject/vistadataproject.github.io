---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE CHECK BOILERPLATE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE CHECK BOILERPLATE{:/}
 tag | {::nomarkdown}BPCHECK{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will evaluate boilerplate passed in the input array, checking tosee whether any of the embedded objects are inactive, faulty, orambiguous.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Checks objects in boilerplate text.
 Input Parameters | {::nomarkdown}TIUX{:/}
 Lines | ```
 N LINE,TIUI,TIUFWHO,TIUFPRIV,TIUY
 S TIUI=0,TIUY=1,TIUFPRIV=1,TIUFWHO="M"
 K ^TMP("TIUF",$J)
 F  S TIUI=$O(TIUX(2,TIUI)) Q:+TIUI'>0  D  Q:'+TIUY
 . S LINE=$G(TIUX(2,TIUI,0))
 . I LINE["|" D
 . . I ($L(LINE,"|")+1)#2 D  Q
 . . . S TIUY=0
 . . . S TIUTY(1)="Object split between lines, rest of line not checked:"
 . . . S TIUTY(2)=LINE
 . . N PIECE
 . . F PIECE=2:2:$L(LINE,"|") D  Q:TIUY=0
 . . . N OBJNM
 . . . S OBJNM=$P(LINE,"|",PIECE)
 . . . I OBJNM="" D  Q
 . . . . S TIUY=0
 . . . . S TIUTY(1)="Brackets are there, but there's no name inside ||:"
 . . . . S TIUTY(2)=LINE
 . . . N XREF,ARR
 . . . F XREF="B","C","D" D  Q:'+TIUY
 . . . . N ODA S ODA=0
 . . . . F  S ODA=$O(^TIU(8925.1,XREF,OBJNM,ODA)) Q:+ODA'>0  D  Q:'+TIUY
 . . . . . S:$D(^TIU(8925.1,"AT","O",ODA)) ARR(ODA)=""
 . . . . . I $O(ARR($O(ARR(0)))) D
 . . . . . . S TIUY=0
 . . . . . . S TIUTY(1)="Object |"_OBJNM_"| is ambiguous."
 . . . . . . S TIUTY(2)="It could be any of SEVERAL objects. Please contact IRM."
 . . . I '$D(ARR) D  Q
 . . . . S TIUY=0
 . . . . S TIUTY(1)="Object |"_OBJNM_"| cannot be found in the file."
 . . . . S TIUTY(2)="Use UPPERCASE and object's exact NAME, PRINT NAME, or ABBREVIATION."
 . . . . S TIUTY(3)="Any of these may have changed since |"_OBJNM_"| was embedded."
 . . . S ODA=$O(ARR(0)) N OBJCK D CHECK^TIUFLF3(ODA,0,0,.OBJCK)
 . . . I '+OBJCK D  Q:'+TIUY
 . . . . N SUBS
 . . . . F SUBS="F","T","O","S","J" D
 . . . . . I $D(OBJCK(SUBS)) D
 . . . . . . S TIUY=0
 . . . . . . S TIUTY(1)="Object |"_OBJNM_"| is faulty: "
 . . . . . . S TIUTY(2)=OBJCK(SUBS)_"."
 . . . I $P(^TIU(8925.1,ODA,0),U,7)'=11 D
 . . . . S TIUY=0
 . . . . S TIUTY(1)="Object |"_OBJNM_"| is NOT ACTIVE."
 K ^TMP("TIUF",$J)
```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a local array containg boilerplate text for the template in wordprocessing subscript format, e.g.: TIUX(2,1,0)=\The pt. is a AGE yo RACE SEX who presented to the\TIUX(2,2,0)=\PULMONARY clinic on VISIT DATE for pulmonary function\TIUX(2,3,0)=\tests to rule out Asthma/COPD.\{:/} | 




 Generated on January 13th 2017, 6:55:29 am