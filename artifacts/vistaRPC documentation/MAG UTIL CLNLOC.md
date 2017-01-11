---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG UTIL CLNLOC 

 property | value 
--- | --- 
 label | MAG UTIL CLNLOC
 tag | NETLOC
 routine | [MAGSDEL5](http://code.osehra.org/dox/Routine_MAGSDEL5_source.html)
 return value type | ARRAY
 description | MAG UTILITY - Delete a Network Location that has no references to images. Input Parameters   IN : Network Location IEN   PLACE : User SITE PARAMETER IEN      STEP : IEN range to run - format = <startIEN>#<endIEN>  Output Parameter:   OUT : Array of results RPC to delete a network location. If no image files are linked to the network location, the selected entry will be removed. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 6 | true | NETWORK LOCATION IEN | 
| PLACE | LITERAL | 2 | true | PLACE OF IMAGE SITE PARAMETERS | 
| STEP | LITERAL |  | true | Used to create chunks of data(iens) for processing.  This is used to eliminate Broker timeouts during processing. | 




 Generated on January 11th 2017, 7:15:04 am