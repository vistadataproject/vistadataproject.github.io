---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Patient_ihs-9000001<br/>
<a name="top"></a>
# Patient/ihs (9000001)
This file is IHS's primary patient data file.  The NAME (.01) field of this  file is a pointer to the VA's patient file (#2).  Fields in  common between the two dictionaries actually exist only in the VA patient  file and are referenced by the IHS patient file as computed fields.  All  other files containing patient data have backward pointers linking them to  this file.  The linkage is by patient name and the internal FileMan gener- ated number of the ancillary file is the same number used in this file.     All applications developed for the RPMS which require patient data will point to this file.

**Global:** ^AUPNPAT(

**Domain:** Patients

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This field points to the Patient file (#2) and has the same internal<br/>number as that file.  Thus,the patient's name is the Patient file (#2)<br/>name. | POINTER | INDEXED<br/>REQUIRED | [Patient-2](Patient-2)
**Location Of Home**{::nomarkdown}<pre><code>  location_of_home</code></pre>{:/} | 1201 | This is the directions to get to the patients home. | STRING |  | 
**Health Record No.**{::nomarkdown}<pre><code>  health_record_no</code></pre>{:/} | 4101 | This multiple contains the different health record identifiers by facility.<br/>IHS uses a 6 character identifier.<br/>The VA uses the social security number which may be up to 10 <br/>characters.   | OBJECT |  | [Health_Record_No-9000001_41](#Health_Record_No-9000001_41)

## Sub-Files
### <a name="Health_Record_No-9000001_41"></a>Health Record No. (9000001.41)

<dl>
<dt>ID</dt><dd>Health_Record_No-9000001_41</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Health Record Fac**{::nomarkdown}<pre><code>  health_record_fac</code></pre>{:/} | .01 | This field is a pointer to the LOCATION file.  The internal pointer<br/>is forced into the third subscript for the 9000001.41 subfile.  This<br/>allows easy lookup by health record number for the logged on<br/>location (facility).<br/> <br/>The complete subscript for 9000001.41 will be (DFN,41,facility pointer,0). | POINTER | REQUIRED | [Location-9999999_06](Location-9999999_06)
**Health Record No.**{::nomarkdown}<pre><code>  health_record_no</code></pre>{:/} | .02 | This field is used to represent the health record number related to a<br/>facility.<br/> <br/>IHS uses a 6 character whole number.<br/> <br/>VA uses the patient SSN from the Patient File (2). | STRING | INDEXED<br/>REQUIRED | 
**Date Inactivated/deleted**{::nomarkdown}<pre><code>  date_inactivated_deleted</code></pre>{:/} | .03 | This is date that the patients entry was inactivated. | DATE-TIME |  | 
**Record Status**{::nomarkdown}<pre><code>  record_status</code></pre>{:/} | .05 | This field is used by the IHS Multi-Facility Integration (MFI) package<br/>to determine whether to stop integrating data at a facility for a <br/>particular patient and location facility. | ENUMERATION |  | {::nomarkdown}DELETED: <em><strong>D</strong></em><br/>INACTIVATED: <em><strong>I</strong></em><br/>MERGED: <em><strong>M</strong></em>{:/}
**Stop Integration**{::nomarkdown}<pre><code>  stop_integration</code></pre>{:/} | .06 | This field is used by the Mult-Facility Integration (MFI) package,<br/>created by IHS,to indicate this patients data should no longer be<br/>integrated by MFI. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}