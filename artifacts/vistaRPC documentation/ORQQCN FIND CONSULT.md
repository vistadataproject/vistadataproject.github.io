---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQCN FIND CONSULT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN FIND CONSULT{:/}
 tag | {::nomarkdown}FINDCSLT{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a Consult IEN in file 123, return a formatted list item for thatsingle consult only, in the same format as returned by ORQQCN LIST.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMRCO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | FINDCSLT^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | Return list item for the selected consult only
 Input parameters | {::nomarkdown}GMRCIEN{:/}
 Code | ```  N ORPT,X0,GMRCOER,SEQ,SEQ0<br/> Q:+$G(GMRCIEN)=0<br/> S X0=$G(^GMR(123,GMRCIEN,0)) I 'X0 S Y="-1^Consult not found" Q<br/> S ORPT=$P(X0,U,2) I '$G(ORPT) S Y="-1^Patient not found" Q<br/> S GMRCOER=2,SEQ=""<br/> D OER^GMRCSLM1(ORPT,"","","","",GMRCOER)<br/> F  S SEQ=$O(^TMP("GMRCR",$J,"CS",SEQ)) Q:SEQ=""!(SEQ?1A.E)  I SEQ>0 D<br/> .S SEQ0=^TMP("GMRCR",$J,"CS",SEQ,0) I $P(SEQ0,U,1)=GMRCIEN S Y=SEQ0 Q<br/> K ^TMP("GMRCR",$J)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}