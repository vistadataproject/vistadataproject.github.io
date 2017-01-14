---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWOR1 SETDTEXT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 SETDTEXT{:/}
 tag | {::nomarkdown}SETDTEXT{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Sets/updates the external text of an order.The updated text is also returned.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SETDTEXT^[ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 Method comment | Set Digital Text data into file 100 & return the array
 First comment | {::nomarkdown}ORDER = ORIFN;ACTION<br/>ORDEA = Schedule of Drug (2-5)<br/>ORSIGNER = DUZ of signer{:/}
 Input parameters | {::nomarkdown}ORDER<br/>ORDEA<br/>ORSIGNER{:/}
 Code | ```  N ORSET,IFN,ACT,I
 S Y="-1^Digital Text failed to build",IFN=+ORDER,ACT=$P(ORDER,";",2)
 I '$G(ORDEA) Q
 I '$G(ORSIGNER) S ORSIGNER=DUZ
 D DIGTEXT^ORCSAVE1(IFN,ORDEA,ORSIGNER)
 S Y=0
 I '$G(ORSET) Q
 K ^OR(100,IFN,8,ACT,.2)
 F I=1:1:ORSET S (Y(I),^OR(100,IFN,8,ACT,.2,I,0))=ORSET(I)
 S ^OR(100,IFN,8,ACT,.2,0)="^^"_ORSET_"^"_ORSET_"^"_DT_"^",Y=ORSET```




 Generated on January 14th 2017, 7:26:35 am