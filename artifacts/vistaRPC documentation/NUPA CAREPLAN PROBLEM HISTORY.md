---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NUPA CAREPLAN PROBLEM HISTORY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}NUPA CAREPLAN PROBLEM HISTORY{:/}
 tag | {::nomarkdown}HIST{:/}
 routine | [NUPABCL1](http://code.osehra.org/dox/Routine_NUPABCL1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Provides the history for a selected problem & intervention in a patient's care plan for the current admission.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DA {:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Three piece variable.  Pieces are: 1. IEN of problem from file 1927.2. 2. IEN of intervention from file 1927.24. 3. IEN of the Care Plan from file 1927.4.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}