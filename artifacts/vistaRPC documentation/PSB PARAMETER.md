---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB PARAMETER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB PARAMETER{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [PSBPAR](http://code.osehra.org/dox/Routine_PSBPAR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Called by client to return or set parameters{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBCMD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the command to perform against the system parameters.GETPAR: Get a single instance of a parameterGETLST: Get all instances of a multiple valued parameterSETPAR: Set a single instance of a parameterCLRLST: Clear all instances of parameters in a list{:/} | 
| {::nomarkdown}PSBENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the entity to act upon.  Usually \###;DIC(4,\ for division.{:/} | 
| {::nomarkdown}PSBPAR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The parameter as defined in file 8989.51.{:/} | 
| {::nomarkdown}PSBINS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The instance of the parameter that you want to return.  Defaults to 1.{:/} | 
| {::nomarkdown}PSBVAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If setting a parameter this contains the data value to place in the parameter.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}