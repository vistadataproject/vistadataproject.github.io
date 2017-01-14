---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV PARAMETER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV PARAMETER{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [GMVPAR](http://code.osehra.org/dox/Routine_GMVPAR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Sets and retrieves parameter values used by the graphical user interface. This remote procedure call is documented in Integration Agreement 4367.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Routine tag line to call.{:/} | 
| {::nomarkdown}ENT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The entity value to use. See Integration Agreement 2263 and FILE 8989.518for a list of entity values.{:/} | 
| {::nomarkdown}PAR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The parameter value to use. See FILE 8989.51 for a list of parametervalues. This value must start with the letters \GMV\ (no quotes).{:/} | 
| {::nomarkdown}INST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The instance to use. {:/} | 
| {::nomarkdown}VAL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The value assigned to a parameter. Values are stored in FILE 8989.5.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RPC^[GMVPAR](http://code.osehra.org/dox/Routine_GMVPAR_source.html)
 Method comment | [Procedure] Main RPC Hit Point
 First comment | {::nomarkdown}RPC: [GMV PARAMETER]<br/>Requires that the parameter name in PAR<br/>be in the GMV namespace.<br/>Input parameters<br/>1. RESULTS [Literal/Required] No description<br/>2. OPTION [Literal/Required] No description<br/>3. ENT [Literal/Required] No description<br/>4. PAR [Literal/Required] No description<br/>5. INST [Literal/Required] No description<br/>6. VAL [Literal/Required] No description{:/}
 Input parameters | {::nomarkdown}OPTION<br>ENT<br>PAR<br>INST<br>VAL{:/}
 Code | {::nomarkdown}  N ERR,TMP,RET,TXT,IEN,IENS,ROOT<br> S INST=$G(INST,1)<br> S PAR=$G(PAR,"GMV")<br> S RESULTS=$NA(^TMP($J)) K @RESULTS<br> I PAR'?1"GMV".E S ^TMP($J,0)="-1^Non Vitals Measurements Parameter" Q<br> D:$T(@OPTION)]"" @OPTION<br> I +$G(ERR) K @RESULTS S @RESULTS@(0)="-1^Error: "_(+ERR)_" "_$P(ERR,U,2)<br> I '$D(^TMP($J)) S @RESULTS@(0)="-1^No date returned"<br> D CLEAN^DILF{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}