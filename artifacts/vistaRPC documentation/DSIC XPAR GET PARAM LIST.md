---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC XPAR GET PARAM LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC XPAR GET PARAM LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will return a detailed list of one or more Kernel ParameterDefinitions.  It does not return every Param Definition field. Either the NAME input parameter or the PREFIX input parameter is required.  If you pass a NAME then PREFIX is ignored.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name or the IFN for a Parameter Definition.  Pass this value only if you wish to retrieve the data for one specific Parameter Definition.{:/} | 
| {::nomarkdown}PREFIX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the namespace or the leading characters for the Parameter Definitions you wished to be returned.  For example, PREFIX=\DSIC\ will return all DSIC Kernel Parameter Definitions.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}