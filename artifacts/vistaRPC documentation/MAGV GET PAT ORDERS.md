---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GET PAT ORDERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET PAT ORDERS{:/}
 tag | {::nomarkdown}GETORD{:/}
 routine | [MAGVIM02](http://code.osehra.org/dox/Routine_MAGVIM02_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns an array of CONsult or RADiology orders for an inputENTERPRISE PATIENT IDENTIFIER.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENTERPRISE PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ENTERPRISE PATIENT ID.{:/} | 
| {::nomarkdown}PATIENT ID TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Single character per ID TYPE field (#.03) of theIMAGING PATIENT REFERENCE file (#2005.6).{:/} | 
| {::nomarkdown}PATIENT ID ASSIGNING AUTHORITY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Single character per ASSIGNING AUTHORITY field (#.02) of theIMAGING PATIENT REFERENCE file (#2005.6).{:/} | 
| {::nomarkdown}PATIENT ID CREATING ENTITY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Free text per CREATING ENTITY field (#.04) of the IMAGING PATIENT REFERENCE file (#2005.6).{:/} | 
| {::nomarkdown}ORDER TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Free text as \CON\ for Consult Orders, \RAD\ for Radiology Orders.{:/} | 
| {::nomarkdown}ORDER DATE FILTER START{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A date formatted as MMDDYYYY.{:/} | 
| {::nomarkdown}ORDER DATE FILTER END{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A date formatted as MMDDYYYY.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}