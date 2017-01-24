---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGJ CPTMATCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ CPTMATCH{:/}
 tag | {::nomarkdown}CPTGRP{:/}
 routine | [MAGJUTL4](http://code.osehra.org/dox/Routine_MAGJUTL4_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}  +---------------------------------------------------------------+   Property of the US Government.                                   No permission to copy or redistribute this software is given.    Use of unreleased versions of this software requires the user    to execute a written test agreement with the VistA Imaging       Development Office of the Department of Veterans Affairs,        telephone (301) 734-0100.                                                                                                         The Food and Drug Administration classifies this software as     a medical device.  As such, it may not be changed in any way.    Modifications to this software may result in an adulterated      medical device under 21CFR820, the use of which is considered    to be a violation of US Federal Statutes.                       +---------------------------------------------------------------+Imaging Vistarad RPC for finding related procedures based on CPTmatching table (file #2006.67 -- MAG RAD CPT MATCHING FILE).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}CPT Code ^ Matching CriteriaMAtching Criteria is a number, 1:n, to indicate basis for matching: 1--Similar CPT; 2--Body Part; 3--Body Part & Modality{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}