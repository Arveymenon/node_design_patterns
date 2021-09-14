export default interface IFileWriter{
    write(path: string | undefined): boolean
}