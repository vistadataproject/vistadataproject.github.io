---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORVAA VAA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORVAA VAA{:/}
 tag | {::nomarkdown}VAA{:/}
 routine | [ORVAA](http://code.osehra.org/dox/Routine_ORVAA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the policy name for a veteran with VA Advantage. If the veteran does not have VA Advantage the return value will be 0.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The DFN is the veteran patient's Internal Entry Number in the PATIENT file.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | VAA^[ORVAA](http://code.osehra.org/dox/Routine_ORVAA_source.html)
 First comment | {::nomarkdown}Returns primary insurance policy name if VAA or TriCare{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N I,IBDT,IBFLDS,IBSTAT,LC,LQ,ORIBR,ORX,PIC,WI<br> S ORY(0)=""<br> S IBSTAT="RB",(LC,ORIBR,PIC)="",(LQ,WI)=0,IBFLDS="*"<br> S IBDT=$$NOW^XLFDT<br> S PIC=$$INSUR^IBBAPI(DFN,IBDT,IBSTAT,.ORIBR,IBFLDS)<br> I PIC<0 S ORY(0)=0 Q<br> I PIC=0 S:ORY(0)="" ORY(0)=0 Q<br> S $P(ORY(0),U)="Pt Insur",$P(ORY(0),U,2)="Patient has active Insurance"<br> S $P(ORY(0),U,3)=""<br> F  S LC=$O(ORIBR("IBBAPI","INSUR",LC)) Q:LC=""!(LQ)  D<br> . D FLD01,FLD02,FLD03,FLD04,FLD05,FLD06,FLD07,FLD08,FLD09,FLD10<br> . D FLD11,FLD12,FLD13,FLD14,FLD15,FLD16,FLD17,FLD18,FLD19,FLD20<br> . S WI=WI+1,ORY(WI)=""<br> I ORY(0)="" S ORY(0)=0{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}