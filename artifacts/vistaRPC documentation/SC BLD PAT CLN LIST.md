---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC BLD PAT CLN LIST 

 property | value 
--- | --- 
 label | SC BLD PAT CLN LIST
 tag | PTCLBLD
 routine | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
 return value type | SINGLE VALUE
 description | This RPC build a list of patients by assignment to a selected clinic.Lookup is in the Hospital location file, screening of \C\ in the (0,3) node.  List is stored in ^TMP($J,\SCCLPT\,N)=DFN.  List is alphabetized by name.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAMETER LIST | LIST | 512 | true |  | 