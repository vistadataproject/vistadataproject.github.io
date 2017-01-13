---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG UTIL CLNLOC 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG UTIL CLNLOC{:/}
 tag | {::nomarkdown}NETLOC{:/}
 routine | [MAGSDEL5](http://code.osehra.org/dox/Routine_MAGSDEL5_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}MAG UTILITY - Delete a Network Location that has no references to images. Input Parameters   IN : Network Location IEN   PLACE : User SITE PARAMETER IEN      STEP : IEN range to run - format = <startIEN>#<endIEN>  Output Parameter:   OUT : Array of results RPC to delete a network location. If no image files are linked to the network location, the selected entry will be removed. {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} | {::nomarkdown}true{:/} | {::nomarkdown}NETWORK LOCATION IEN{:/} | 
| {::nomarkdown}PLACE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PLACE OF IMAGE SITE PARAMETERS{:/} | 
| {::nomarkdown}STEP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Used to create chunks of data(iens) for processing.  This is used to eliminate Broker timeouts during processing.{:/} | 




 Generated on January 13th 2017, 6:44:48 am