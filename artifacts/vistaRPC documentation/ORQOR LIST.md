---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQOR LIST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQOR LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQOR1](http://code.osehra.org/dox/Routine_ORQOR1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patient orders.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN from Patient file [#2].{:/} | 
| {::nomarkdown}GROUP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Entry number of the desired display group from the Display Group File [#100.98].{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag identifying the context of the orders to be retreived.{:/} | 
| {::nomarkdown}STARTDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The startdate for the order search in 'T' or Fileman format.Startdate is only considered when FLAG is '1' (return all orders).{:/} | 
| {::nomarkdown}STOPDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The stopdate for the order search in 'T' or Fileman format.Stopdate is only considered when FLAG is '1' (return all orders).{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LIST^[ORQOR1](http://code.osehra.org/dox/Routine_ORQOR1_source.html)
 Method comment | return list of patient orders
 First comment | {::nomarkdown}return PATIENT's orders for a display GROUP of type FLAG<br/>between start (ORSDT) and end dates (OREDT)<br/>dates can be in Fileman or T, T-14 formats{:/}
 Input parameters | {::nomarkdown}PATIENT<br/>GROUP<br/>FLAG<br/>ORSDT<br/>OREDT<br/>ORXREF<br/>GETKID{:/}
 Code | ```  N GIEN S GIEN=""
 I $L($G(ORSDT)) D DT^DILF("T",ORSDT,.ORSDT,"","")
 I $L($G(OREDT)) D DT^DILF("T",OREDT,.OREDT,"","")
 I (ORSDT=-1)!(OREDT=-1) S ORY(1)="^Error in date range." Q
 S PATIENT=PATIENT_";DPT("
 S:$L($G(GROUP)) GIEN=$O(^ORD(100.98,"B",GROUP,GIEN))
 K ^TMP("ORR",$J)
 D EN^ORQ1(PATIENT,GIEN,FLAG,"",ORSDT,OREDT,1,0,$G(ORXREF),$G(GETKID))
 N J,HOR,SEQ,X S J=1,HOR=0,SEQ=0
 S HOR=$O(^TMP("ORR",$J,HOR)) Q:+HOR<1
 F  S SEQ=$O(^TMP("ORR",$J,HOR,SEQ)) Q:+SEQ<1  D
 .S X=^TMP("ORR",$J,HOR,SEQ)
 .S ORY(J)=$P(X,U)_U_$E(^TMP("ORR",$J,HOR,SEQ,"TX",1),1,60)_U_$P(X,U,4)_U_$P(X,U,6),J=J+1
 K ^TMP("ORR",$J)
 S:+$G(ORY(1))<1 ORY(1)="^No orders found."```




 Generated on January 14th 2017, 7:26:35 am