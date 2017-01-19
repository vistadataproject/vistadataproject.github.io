---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV FILE DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV FILE DATA{:/}
 tag | {::nomarkdown}UPD{:/}
 routine | [DENTVRF](http://code.osehra.org/dox/Routine_DENTVRF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The will process the data from the DRM GUI and file it to the corresponding files.  It will create a record in file 221, 228.1, one or more files in 228.2, and will file data to PCE.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This array will contain all the data needed. data(1) = p1^p2^p3^p4^p5^p6^p7  where       p1=dfn   p2=visit file ien   p3=appt date.time       p4=new appt date.time   p5=location (file 44 ien)       p6=primary provider     p7=primary icd9 for pce  data(2) = secondary provider^sec prov^sec prov^ .... data(3) = p1^p2^p3^p4^p5^p6  [ SC^AO^IR^EC^MST^HNC ] data(4)= DAS category ^ bedsection ^ disposition ^ station.division    NOTES: Must have a location in order to create a new visit by passing anew appointment date.time   If filing data to PCE, then location andprimary ICD9 are mandatory    data(n) = p1^p2^p3^p4^...^p12  where n=5,6,7,8,9....  and where      p1 = optional - flag for filing data      p2 = cptcode (.01 field value from file 81)      p3 = tooth# (0-32)      p4 = surfaces      p5 = canals      p6 = quadrants      p7 = primary (Y)      p8 = icd9 code (primary diag code for this procedure and tooth)      p9,p10,p11,p12 - optional secondary icd9 codes    NOTES: p1 is optional - format mmm where m is either 0 or 1    null or 111 - file data to old DAS, new dental history, and to PCE            000 - don't file data - should never be            100 - file to old DAS only            010 - file to new dental history only            001 - file to PCE only            110 - file to old DAS and new dental history            101 - file to old DAS and PCE            011 - file to new dental history and PCE                  p4,p5,p6,p8-p11 - all optional - send data only if relevant       p5 - qty may be eliminated pending outcome of current messages{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}