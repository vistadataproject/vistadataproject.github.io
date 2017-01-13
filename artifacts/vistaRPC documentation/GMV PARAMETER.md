---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV PARAMETER 

 property | value 
--- | --- 
 label | {::nomarkdown}GMV PARAMETER{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [GMVPAR](http://code.osehra.org/dox/Routine_GMVPAR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Sets and retrieves parameter values used by the graphical user interface. This remote procedure call is documented in Integration Agreement 4367.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | [Procedure] Main RPC Hit Point

 Leading comment lines | {::nomarkdown}RPC: [GMV PARAMETER]
Requires that the parameter name in PAR
be in the GMV namespace.
Input parameters
1. RESULTS [Literal/Required] No description
2. OPTION [Literal/Required] No description
3. ENT [Literal/Required] No description
4. PAR [Literal/Required] No description
5. INST [Literal/Required] No description
6. VAL [Literal/Required] No description{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Routine tag line to call.{:/} | 
| {::nomarkdown}ENT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The entity value to use. See Integration Agreement 2263 and FILE 8989.518for a list of entity values.{:/} | 
| {::nomarkdown}PAR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The parameter value to use. See FILE 8989.51 for a list of parametervalues. This value must start with the letters \GMV\ (no quotes).{:/} | 
| {::nomarkdown}INST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The instance to use. {:/} | 
| {::nomarkdown}VAL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The value assigned to a parameter. Values are stored in FILE 8989.5.{:/} | 




 Generated on January 13th 2017, 6:15:57 am