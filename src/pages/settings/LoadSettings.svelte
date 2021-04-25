<script>
  import { db } from "../../firebase/firebase";

  export let uid;
  export let modeChange;

  const query = db
    .doc("todos/" + uid + "/documents/settings")
    .get()
    .then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        modeChange({ detail: data.darkmode });
      } else {
        db.doc("todos/" + uid + "/documents/settings").set({
          darkmode: false,
        });
      }
    });
</script>
