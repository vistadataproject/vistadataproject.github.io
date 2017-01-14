---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE CPTMODS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE CPTMODS{:/}
 tag | {::nomarkdown}CPTMODS{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of CPT Modifiers for a given CPT Code.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return CPT Modifiers for a CPT Code
 Input Parameters | {::nomarkdown}ORCPTCOD<br/>ORDATE{:/}
 Lines | {::nomarkdown} N ORM,ORIDX,ORI,MODNAME<br/> S:'+$G(ORDATE) ORDATE=DT<br/> I +($$CODM^ICPTCOD(ORCPTCOD,$NA(ORM),0,ORDATE)),+$D(ORM) D<br/> . S ORIDX="",ORI=0<br/> . F  S ORIDX=$O(ORM(ORIDX)) Q:(ORIDX="")  D<br/> . . S ORI=ORI+1,MODNAME=$P(ORM(ORIDX),U,1)<br/> . . S LST(MODNAME_ORI)=$P(ORM(ORIDX),U,2)_U_MODNAME_U_ORIDX{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCPTCOD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}CPT Code{:/} | 




 Generated on January 13th 2017, 7:15:27 am