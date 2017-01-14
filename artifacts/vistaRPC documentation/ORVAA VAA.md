---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORVAA VAA 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORVAA VAA{:/}
 tag | {::nomarkdown}VAA{:/}
 routine | [ORVAA](http://code.osehra.org/dox/Routine_ORVAA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the policy name for a veteran with VA Advantage. If the veteran does not have VA Advantage the return value will be 0.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The DFN is the veteran patient's Internal Entry Number in the PATIENT file.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VAA^[ORVAA](http://code.osehra.org/dox/Routine_ORVAA_source.html)
 First comment | {::nomarkdown}Returns primary insurance policy name if VAA or TriCare{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  N I,IBDT,IBFLDS,IBSTAT,LC,LQ,ORIBR,ORX,PIC,WI
 S ORY(0)=""
 S IBSTAT="RB",(LC,ORIBR,PIC)="",(LQ,WI)=0,IBFLDS="*"
 S IBDT=$$NOW^XLFDT
 S PIC=$$INSUR^IBBAPI(DFN,IBDT,IBSTAT,.ORIBR,IBFLDS)
 I PIC<0 S ORY(0)=0 Q
 I PIC=0 S:ORY(0)="" ORY(0)=0 Q
 S $P(ORY(0),U)="Pt Insur",$P(ORY(0),U,2)="Patient has active Insurance"
 S $P(ORY(0),U,3)=""
 F  S LC=$O(ORIBR("IBBAPI","INSUR",LC)) Q:LC=""!(LQ)  D
 . D FLD01,FLD02,FLD03,FLD04,FLD05,FLD06,FLD07,FLD08,FLD09,FLD10
 . D FLD11,FLD12,FLD13,FLD14,FLD15,FLD16,FLD17,FLD18,FLD19,FLD20
 . S WI=WI+1,ORY(WI)=""
 I ORY(0)="" S ORY(0)=0```




 Generated on January 14th 2017, 7:26:36 am