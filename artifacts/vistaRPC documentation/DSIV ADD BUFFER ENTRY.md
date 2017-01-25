---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV ADD BUFFER ENTRY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV ADD BUFFER ENTRY{:/}
 tag | {::nomarkdown}ADDBUF{:/}
 routine | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Adds a new entry to the INSURANCE BUFFER file #355.33.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient internal entry number.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}\M\ for Medicare, \X\ for all other insurance (default).{:/} | 
| {::nomarkdown}INSCO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Insurance company name.  Required for non-Medicare insurance.Not required for Medicare type.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of keyword^value pairs for Medicare type entry orField number^value pairs for other insurance type entries.For example, SOURCE is a required value.  For non-Medicareentries this could be specified as DATA(1)=\.03^1\, meaningsource=interview.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}