---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Patient_ihs-9000001 

 property | value 
--- | --- 
 id | Patient_ihs-9000001
 fmId | 9000001
 label | Patient/ihs
 location | ^AUPNPAT(
 description | {::nomarkdown}This file is IHS's primary patient data file.  The NAME (.01) field of this <br/>file is a pointer to the VA's patient file (#2).  Fields in <br/>common between the two dictionaries actually exist only in the VA patient <br/>file and are referenced by the IHS patient file as computed fields.  All <br/>other files containing patient data have backward pointers linking them to <br/>this file.  The linkage is by patient name and the internal FileMan gener-<br/>ated number of the ancillary file is the same number used in this file.<br/>   <br/>All applications developed for the RPMS which require patient data will<br/>point to this file.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This field points to the Patient file (#2) and has the same internal<br/>number as that file.  Thus, the patient's name is the Patient file (#2)<br/>name.{:/} | POINTER |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
| location_of_home | 1201 | Location Of Home | {::nomarkdown}This is the directions to get to the patients home.{:/} | STRING |  |  |  | 
| health_record_no | 4101 | Health Record No. | {::nomarkdown}This multiple contains the different health record identifiers by facility.<br/>IHS uses a 6 character identifier.<br/>The VA uses the social security number which may be up to 10 <br/>characters.  {:/} | [OBJECT] |  |  | [Health_Record_No-9000001_41](#Health_Record_No-9000001_41)  | 

## <a name="Health_Record_No-9000001_41"></a>Health_Record_No-9000001_41 

 property | value 
--- | --- 
 id | Health_Record_No-9000001_41
 label | Health Record No.

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| health_record_fac | .01 | Health Record Fac | {::nomarkdown}This field is a pointer to the LOCATION file.  The internal pointer<br/>is forced into the third subscript for the 9000001.41 subfile.  This<br/>allows easy lookup by health record number for the logged on<br/>location (facility).<br/> <br/>The complete subscript for 9000001.41 will be (DFN,41,facility pointer,0).{:/} | POINTER |  | REQUIRED | Location-9999999_06 | 
| health_record_no | .02 | Health Record No. | {::nomarkdown}This field is used to represent the health record number related to a<br/>facility.<br/> <br/>IHS uses a 6 character whole number.<br/> <br/>VA uses the patient SSN from the Patient File (2).{:/} | STRING |  | REQUIRED, INDEXED |  | 
| date_inactivated_deleted | .03 | Date Inactivated/deleted | {::nomarkdown}This is date that the patients entry was inactivated.{:/} | DATE-TIME |  |  |  | 
| record_status | .05 | Record Status | {::nomarkdown}This field is used by the IHS Multi-Facility Integration (MFI) package<br/>to determine whether to stop integrating data at a facility for a <br/>particular patient and location facility.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>D</dt><dd>DELETED</dd><dt>I</dt><dd>INACTIVATED</dd><dt>M</dt><dd>MERGED</dd></dl>{:/} | 
| stop_integration | .06 | Stop Integration | {::nomarkdown}This field is used by the Mult-Facility Integration (MFI) package,<br/>created by IHS, to indicate this patients data should no longer be<br/>integrated by MFI.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 8:01:05 am</p>{:/}