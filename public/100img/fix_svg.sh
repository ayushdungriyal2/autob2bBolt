for file in *.jpeg.jpeg; do
    newname="${file%.jpeg}"
    mv "$file" "$newname"
done
