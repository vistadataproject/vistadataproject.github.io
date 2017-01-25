---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VBECS LAB ACCESSION UID LOOKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VBECS LAB ACCESSION UID LOOKUP{:/}
 tag | {::nomarkdown}ORDNUM{:/}
 routine | [VBECRPCB](http://code.osehra.org/dox/Routine_VBECRPCB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns XML containing a list of Laboratory tests and associated data based on a Lab Order number. The data is used in VBECS to validate an order and associated a specimen UID with the Blood Bank request. XML Mapping:PatientName element =     PATIENT file (#2) / NAME field (#.01)VistaPatientId element =  PATIENT file (#2) / NUMBER field (#.001)LabOrderNumber element =  LAB ORDER ENTRY file (#69) / SPECIMEN sub-file                           (#69.01) / ORDER# field (#9.5)LabTestId element =       LAB ORDER ENTRY file (#69) / SPECIMEN sub-file                           (#69.01) / TEST/PROCEDURE field (#.01)LabTestName element =     LABORATORY TEST file (#60) / NAME field (#.01)SpecimenAccessionNumber = ACCESSION file (#68) / ACCESSION NUMBER                           sub-file (#68.02) / ACCESSION field (#15)SpecimenUid =             LAB ORDER ENTRY file (#69) / SPECIMEN sub-file                           (#69.01) / TEST sub-file (#69.03) / UID field                          (#16)CollectionDateTime =      ACCESSION file (#68) / ACCESSION NUMBER                           sub-file (#68.02) / DRAW TIME field (#9) XML Example:<UIDLookup>    <LabTests>        <LabTest>            <PatientName>VBECSpatient,One</PatientName>            <VistaPatientId>308</VistaPatientId>            <LabOrderNumber>11465</LabOrderNumber>            <LabTestID>6479</LabTestID>            <LabTestName>VBECS RED BLOOD CELLS</LabTestName>            <SpecimenAccessionNumber>2942360003</SpecimenAccessionNumber>            <SpecimenUID>2942360003</SpecimenUID>            <CollectionDateTime>20040823103630-0600</CollectionDateTime>        </LabTest>    </LabTests></UIDLookup>{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VBLRO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input VBLRO = The Lab Order number received in Blood Bank with an orderfrom CPRS. {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}